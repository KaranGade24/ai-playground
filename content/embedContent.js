import { AI } from "../config/geminiConfig.js";

export const embededContent = async (contents) => {
  try {
    const response = await AI.models.embedContent({
      model: "gemini-embedding-001",
      contents,
    });
    if (response.embeddings) {
      return response;
    }
  } catch (error) {
    console.error("Error in generating embedding", error);
  }
};
