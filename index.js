import { chat } from "./chat.js";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const startChat = async () => {
  try {
    // initilization of readline interface
    const rl = new readline.Interface({ input, output });
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
    rl.close();
  } catch (error) {
    console.log(error);
  }
};

startChat();
