import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"
import manualsRouter from "./routes/manuals"

const app = express()
app.use(cors())
app.use(express.json())

// Routes
app.use("/manuals", manualsRouter)

// Health check
app.get("/health", (req, res) => res.json({ status: "ok" }))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`)
})
