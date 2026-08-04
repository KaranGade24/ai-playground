import { generateContent } from "../content/generateContent.js";
import { toolCaller } from "./toolCaller.tool.js";

export const toolExtractor = async (response, prompt) => {
  const jsonString = response
    ?.replace(/```json/g, "")
    ?.replace(/```/g, "")
    ?.trim();

  const json = JSON.parse(jsonString);

  if (json.toolName) {
    const result = toolCaller(json);
    console.log({ result });
    const query = {
      result,
      "result info": `this is the answer of previouse question  (but in answer not mention it is a previous question previose question is question: ${prompt}) format it and give in proper way`,
    };
    console.log({ query });

    response = await generateContent(query);
    return response;
  } else {
    return response;
  }
};
