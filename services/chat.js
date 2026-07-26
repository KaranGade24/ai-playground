import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { chat } from "../providers/gemini.js";

export const startChat = async (rl) => {
  try {
    console.log(`--------------------------------
    🤖 AI Playground
--------------------------------`);
    while (true) {
      const prompt = await rl.question("You: ");
      if (prompt.trim() === "0") {
        break;
      }
      if (prompt.trim() === "") {
        continue;
      }
      const response = await chat(prompt.trim());
      console.log("AI: ", response);
      console.log("__________________________________\n\n");
    }
    // rl.close();
    return;
  } catch (error) {
    console.log("Error in generating chat response", error);
  }
};
