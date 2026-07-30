import { normalChat } from "../chats/normalChat.js";
import { CLI_input } from "../utils/CLI_input.js";

export const startChat = async (rl) => {
  try {
    // formatter
    console.log(`
--------------------------------
    🤖 AI Playground
--------------------------------
`);
    // input
    const { value: prompt } = await CLI_input("You: ");
    // response
    const response = await normalChat(prompt, "gemini-3.5-flash-lite");
    console.log("AI: ", response);
    console.log("__________________________________\n\n");
  } catch (error) {
    console.log("Error in generating chat response", error);
  }
};
