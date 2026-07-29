import { encode, decode } from "gpt-tokenizer";
export async function* chunkGenerator(stream, TOKEN_SIZE = 1000) {
  try {
    let bufferToken = [];
    for await (const piece of stream) {
      bufferToken.push(...encode(piece));

      while (bufferToken.length >= TOKEN_SIZE) {
        const chunks = bufferToken.splice(0, TOKEN_SIZE);
        yield decode(chunks);
      }
    }
    if (bufferToken.length > 0) {
      yield decode(bufferToken);
    }
  } catch (error) {
    console.error("Error in generating tokens.", error);
  }
}
