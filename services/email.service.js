import { createEmailPromptTemplate } from "../temlates/email-template.js";
import { emailValidation } from "../utils/validations.js";
import { CLI_input } from "../utils/CLI_input.js";
import { rl } from "../providers/readline.js";
import { generateContent } from "../content/generateContent.js";

export const emailWriter = async () => {
  try {
    const { value: recipient } = await CLI_input(
      "Enter the recipient for you email: ",
      emailValidation,
    );
    const { value: subject } = await CLI_input("Enter your email subject: ");
    const { value: purpose } = await CLI_input("Enter your email purpose: ");
    console.log("\n");
    const prompt = createEmailPromptTemplate({
      recipient,
      subject,
      purpose,
    });

    const response = await generateContent(prompt);
    console.log(response);

    return;
  } catch (error) {
    console.log("Error in genrating email", error);
  }
};
