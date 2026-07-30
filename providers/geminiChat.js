import { AI } from "../config/geminiConfig.js";

export const geminiChat = async (
  model,
  contents = null,
  config = {},
  type = "",
) => {
  try {
    if (model === "") {
      throw new Error("Please provide the mode name");
    }
    if (type === "") {
      throw new Error("Please provide the chat type");
    }

    // generating response from AIModel
    if (type === "chat") {
      const response = await AI.models.generateContent({
        // model: "gemini-3.5-flash-lite",
        // model: "gemini-embedding-001",
        model,
        contents,
        config,
      });
      if (response.text) {
        return response;
      }
    } else if (type === "embedding") {
      if (!contents)
        throw new Error("Please provide content to convert it into embedding.");
      const response = await AI.models.embedContent({
        model,
        contents,
      });

      if (response.embeddings) {
        return response;
      }
    } else {
      throw new Error("Please provide correct chat type");
    }
  } catch (error) {
    console.log("Error in generating response", error);
    return "";
  }
};
