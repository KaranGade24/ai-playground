import {
  addModelMessage,
  addUserMessage,
  history,
  removeOldHistory,
} from "../memory/history.js";
import { geminiChat } from "../providers/geminiChat.js";

export const normalChat = async (prompt, model = "", config) => {
  try {
    // const model = "";
    if (model === "") {
      throw new Error("Please provide the mode name");
    }
    // const config = { temperature: 1.5 };
    removeOldHistory();
    // passing prompt to history Storage
    addUserMessage(prompt);

    const response = await geminiChat(model, history, config, "chat");

    addModelMessage(response.text.trim());
    return response.text.trim();
  } catch (error) {
    console.error("Error in geting gemeni response.", error);
  }
};
