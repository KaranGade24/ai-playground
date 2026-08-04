import { toolInfo } from "./toolsInfo.js";

export const toolQueryFormater = (prompt) => {
  return {
    "tools info": toolInfo,
    user: prompt,
    "system instruction": `if needed call the tools and retun the info in follwing format without addition info
              {
              toolName:addition,
              arg:[1,3,4]
              }
              ""in json format""
              this is example give like that for all tools
              `,
  };
};
