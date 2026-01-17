import * as express from 'express';
import multer from "multer"
import { supabase } from "../supabase"
import { parseManualToSteps } from "../services/aiParser"

const router = express.Router()

export const upload = multer({
  limits: { fileSize: 20 * 1024 * 1024 },
})

// POST /api/manuals/upload
router.post(
  "/upload",
  upload.single("file"),
  async (req, res) => {
    console.log("Received request")
    console.log("Body:", req.body)
    console.log("File:", req.file)

    try {
      const file = req.file
      const { manualName } = req.body

      if (!file) return res.status(400).json({ error: "No file" })

      // 1. Create manual record
      const { data: manual, error } = await supabase
        .from("manuals")
        .insert({
          name: manualName,
          file_path: "",
          status: "processing",
        })
        .select()
        .single()

      if (error) {
        console.error("Supabase insert error:", error)
        return res.status(500).json({ error: error.message })
      }
      const manualId = manual.id

      // 2. Upload file to storage
      // Node.js Buffer → Uint8Array for Supabase
      const filePath = `${manualId}/original.${file.originalname.split(".").pop()}`
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("manuals")
        .upload(filePath, new Uint8Array(file.buffer))

      if (uploadError) {
        console.error("Supabase upload error:", uploadError)
        return res.status(500).json({ error: uploadError.message })
      }

      // Update manual record
      await supabase
        .from("manuals")
        .update({ file_path: filePath })
        .eq("id", manualId)

      // 3. Update manual with file path
      await supabase
        .from("manuals")
        .update({ file_path: filePath })
        .eq("id", manualId)

      // 4. Parse AI steps (async is better later)
      const steps = await parseManualToSteps(file.buffer)

      // 5. Save steps
      for (const step of steps) {
        await supabase.from("steps").insert({
          manual_id: manualId,
          step_index: step.stepIndex,
          title: step.title,
          description: step.description,
          warnings: step.warnings,
          tools: step.tools,
          parts: step.parts,
          thumbnail_url: step.thumbnailUrl,
          three_state: step.threeState,
        })
      }

      // 6. Finalize
      await supabase
        .from("manuals")
        .update({
          status: "ready",
          total_steps: steps.length,
        })
        .eq("id", manualId)

      res.json({ manualId, status: "ready" })
    
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: "Upload failed" })
    }
  }
)

// GET /api/manuals/:id/status
router.get("/:id/status", async (req, res) => {
  const { id } = req.params

  const { data } = await supabase
    .from("manuals")
    .select("status")
    .eq("id", id)
    .single()

  if (!data) return res.status(404).json({ error: "Manual not found" })

  res.json({ status: data.status })
})

export default router
