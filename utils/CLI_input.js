import { emptyValidatorCLI_input } from "./validations.js";
import { rl } from "../providers/readline.js";

export const CLI_input = async (question = "", validation = null) => {
  while (true) {
    const value = (await rl.question(question)).trim();

    // Required field validation
    const requiredResult = emptyValidatorCLI_input(value);

    if (!requiredResult.success) {
      continue;
    }

    // Custom validation (optional)
    if (validation) {
      const validationResult = validation(value);

      if (!validationResult.success) {
        continue;
      }

      return {
        value,
        validatedValue: validationResult.validatedValue,
      };
    }

    return {
      value,
      validatedValue: null,
    };
  }
};
