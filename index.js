import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { emailWriter } from "./services/email.js";
import { startChat } from "./services/chat.js";

const main = async () => {
  const rl = new readline.Interface({ input, output });
  let op = "";

  while (true) {
    console.log("0: Exit \n1: To chat\n2: For email writing\n");
    op = await rl.question("Enter option: ");

    if (op.trim() === "0") {
      rl.close();
      break;
    } else if (op.trim() === "1") {
      await startChat(rl);
    } else if (op.trim() === "2") {
      await emailWriter(rl);
    } else {
      console.log("You enter wrong option\n");
    }
    console.log({ op });
  }
};

main();
