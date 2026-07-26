import { emptyValidatorCLI_input } from "./validations.js";
import { rl } from "../providers/readline.js";

export const CLI_input = async (question = "", validation = null) => {
  let value;
  while (true) {
    value = await rl.question(`${question}`);
    let result = emptyValidatorCLI_input(value);
    if (!result.sucess) {
      continue;
    } else if (validation !== null && !validation(value)?.sucess) {
      continue;
    } else {
      break;
    }
  }
  return value;
};
