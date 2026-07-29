import { decode, encode } from "gpt-tokenizer";
import { PdfReader } from "pdfreader";
import { chunkGenerator } from "../utils/chunkGenerator.js";
import { readPDFtext } from "../utils/readPdfText.js";

export async function* readPDFfile(filePath = "", TOKEN_SIZE = 1000) {
  try {
    yield* chunkGenerator(readPDFtext(filePath, TOKEN_SIZE), TOKEN_SIZE);
  } catch (error) {
    console.error("Error in reading pdf file.", error);
  }
}
