const pdfParse = require("pdf-parse")

export async function extractPdfText(buffer: Buffer) {
  const data = await pdfParse(buffer) // works because require returns the callable
  return data.text
}
