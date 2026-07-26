// import readline from "node:readline/promises";
// import { stdin as input, stdout as output } from "node:process";
import { emailWriter } from "./services/email.js";
import { startChat } from "./services/chat.js";
import { rl } from "./providers/readline.js";
import { numberValidator } from "./utils/numberValidator.js";

const main = async () => {
  try {
    // const rl = new readline.Interface({ input, output });
    let op = "";

    while (true) {
      console.log("0: Exit \n1: To chat\n2: For email writing\n");
      op = await rl.question("Enter option: ");
      if (!numberValidator(op).sucess) {
        continue;
      }
      op = numberValidator(op).value;

      if (op.trim() === "0") {
        break;
      } else if (op.trim() === "1") {
        await startChat(rl);
      } else if (op.trim() === "2") {
        await emailWriter();
      } else {
        console.log("You enter wrong option\n");
      }
      console.log({ op });
    }
  } catch (error) {
    console.log("Error in main function", error);
  }

  rl.close();
};

main();
