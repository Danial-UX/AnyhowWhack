import OpenAI from "openai"
import { extractPdfText } from "./pdfExtractor"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function parseManualToSteps(fileBuffer: Buffer) {
  const text = await extractPdfText(fileBuffer)

  const prompt = `
You are parsing an IKEA furniture assembly manual.

From the following content:
- Identify clear assembly steps
- Each step must include:
  - stepIndex
  - title
  - description
  - tools (array)
  - parts (name + quantity)
  - warnings (array)

Return STRICT JSON array only.

CONTENT:
${text.slice(0, 12000)}
`

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0,
  })

  return JSON.parse(completion.choices[0].message.content!)
}
