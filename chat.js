import { AI } from "./config/geminiConfig.js";
import {
  addModelMessage,
  addUserMessage,
  history,
  removeOldHistory,
} from "./memory/history.js";

export const chat = async (prompt) => {
  try {
    removeOldHistory();
    // passing prompt to history Storage
    addUserMessage(prompt);

    // generating response from AI model
    const response = await AI.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: history,
    });

    if (response.text) {
      // passing response text to history Storage
      addModelMessage(response.text.trim());
      return response.text.trim();
    } else {
      console.log("Response not found", response);
      return "";
    }
  } catch (error) {
    console.log("Error in generating response", error);
    return "";
  }
};
