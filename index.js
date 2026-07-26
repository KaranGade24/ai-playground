import { actions } from "./providers/actions.js";
import { rl } from "./providers/readline.js";
import { CLI_input } from "./utils/CLI_input.js";
import { numberValidator } from "./utils/numberValidator.js";

const main = async () => {
  try {
    let op = "";

    while (true) {
      console.log(`
0: Exit
1: To chat
2: For email writing
`);
      const { value, validatedValue } = await CLI_input(
        "Enter option: ",
        numberValidator,
      );
      op = validatedValue;

      if (op === 0) {
        break;
      }
      const action = actions[op];
      if (action) {
        await action();
      } else {
        console.log("Enter correct option");
        continue;
      }
    }
  } catch (error) {
    console.log("Error in main function", error);
  }

  rl.close();
};

main();
