import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { createEmailPromptTemplate } from "../temlates/email-template.js";
import { chat } from "../providers/gemini.js";
import {
  emailValidation,
  emptyValidatorCLI_input,
} from "../utils/validations.js";
import { CLI_input } from "../utils/CLI_input.js";
import { rl } from "../providers/readline.js";

export const emailWriter = async () => {
  try {
    const recipient = await CLI_input(
      "Enter the recipient for you email: ",
      emailValidation,
    );
    const subject = await CLI_input("Enter your email subject: ");
    const purpose = await CLI_input("Enter your email purpose: ");
    console.log("\n");
    const prompt = createEmailPromptTemplate({
      recipient,
      subject,
      purpose,
    });

    const response = await chat(prompt);
    console.log(response);

    return;
  } catch (error) {
    console.log("Error in genrating email", error);
  }
};
