import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { createEmailPromptTemplate } from "../temlates/email-template.js";
import { chat } from "../config/chatInit.js";

export const emailWriter = async (rl) => {
  // const rl = new readline.Interface({ input, output });
  try {
    while (true) {
      const recipient = await rl.question(
        "Enter the recipient for you email: ",
      );
      const subject = await rl.question("Enter your email subject: ");
      const purpose = await rl.question("Enter your email purpose: ");

      const prompt = createEmailPromptTemplate({
        recipient,
        subject,
        purpose,
      });

      const response = await chat(prompt);
      console.log(response);

      const start = await rl.question("Exit: 0 \nContinue: press any key\n: ");
      if (start === "0") {
        break;
      }
    }
    // rl.close();
    return;
  } catch (error) {
    console.log("Error in genrating email", error);
  }
};
