import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { chat } from "../providers/gemini.js";
import { CLI_input } from "../utils/CLI_input.js";

export const startChat = async (rl) => {
  try {
    console.log(`
--------------------------------
    🤖 AI Playground
--------------------------------
`);
    const { value: prompt } = await CLI_input("You: ");
    const response = await chat(prompt);
    console.log("AI: ", response);
    console.log("__________________________________\n\n");
  } catch (error) {
    console.log("Error in generating chat response", error);
  }
};
