import { generateEmbeddings } from "../embeddings/embedding.js";
import { startChat } from "../services/chat.js";
import { emailWriter } from "../services/email.js";

export const actions = {
  1: startChat,
  2: emailWriter,
};
