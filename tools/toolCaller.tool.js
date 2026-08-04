import { mathsTools } from "./maths.tool.js";

export const toolCaller = (toolData = { toolName, arg }) => {
  try {
    const tool = mathsTools[toolData.toolName];

    const result = tool(toolData.arg);
    return result;
  } catch (error) {
    console.error("Error in tool calling", error);
  }
};
