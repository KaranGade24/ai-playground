import { generateEmbedding } from "../embeddings/embedding.js";
import { startChat } from "../services/chat.service.js";
import { emailWriter } from "../services/email.service.js";
import { embededChat } from "../services/embededChat.service.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "../demo.txt");
export const actions = {
  1: startChat,
  2: emailWriter,
  3: () => generateEmbedding(filePath, 1000, "text"),
  4: embededChat,
};
