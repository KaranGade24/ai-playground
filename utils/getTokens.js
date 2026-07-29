import { countTokens } from "gpt-tokenizer";
export const getTokenSizeText = (stream, TOKEN_SIZE) => {
  let count = countTokens(stream);
  if (count === 1000) {
    return { text, success: true, token_count: 1000 };
  }
};
