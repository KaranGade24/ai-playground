import { generateContent } from "../content/generateContent.js";
import { toolCaller } from "../tools/toolCaller.tool.js";
import { toolExtractor } from "../tools/toolExtractor.js";
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
    let response = await generateContent(prompt);
    response = await toolExtractor(response, prompt);
    console.log("AI: ", response);
    return response;
    console.log("__________________________________\n\n");
  } catch (error) {
    console.log("Error in generating chat response", error);
  }
};
