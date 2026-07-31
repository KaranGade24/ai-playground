import { AI } from "../config/geminiConfig.js";
import {
  addModelMessage,
  addUserMessage,
  history,
  removeOldHistory,
} from "../memory/history.js";

export const generateContent = async (prompt) => {
  try {
    removeOldHistory();
    // passing prompt to history Storage
    addUserMessage(prompt);

    // generating response from AIModel
    const response = await AI.models.generateContent({
      model: "gemini-3.5-flash-lite",
      // model: "gemini-embedding-001",
      // model,
      contents: history,
      // config,
    });
    if (response.text) {
      addModelMessage(response.text.trim());
      return response.text.trim();
    } else {
      throw new Error("Response not found");
    }
  } catch (error) {
    console.log("Error in generating response", error);
    return "";
  }
};
