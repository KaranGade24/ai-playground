import { encode, decode } from "gpt-tokenizer";
import { PdfReader } from "pdfreader";

export async function* chunkGenerator(stream, TOKEN_SIZE = 1000) {
  try {
    let tokenBuffer = [];
    for await (const piece of stream) {
      tokenBuffer.push(...encode(piece));

      while (tokenBuffer.length >= TOKEN_SIZE) {
        const chunks = tokenBuffer.slice(0, TOKEN_SIZE);
        tokenBuffer.splice(0, TOKEN_SIZE - 50);
        yield decode(chunks);
      }
    }
    if (tokenBuffer.length > 0) {
      yield decode(tokenBuffer);
    }
  } catch (error) {
    console.error("Error in generating tokens.", error);
  }
}
