import { actions } from "./providers/actions.js";
import { rl } from "./providers/readline.js";
import { readFileChunks } from "./services/readPdfFile.js";
import { CLI_input } from "./utils/CLI_input.js";
import { numberValidator } from "./utils/numberValidator.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "demo.txt");

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
  } finally {
    rl.close();
  }
};

// const generator = readFileChunk(filePath);
// while (true) {
//   const result = await generator.next();

//   if (result.done) {
//     break;
//   }

//   const chunk = result.value;
//   console.log(chunk);
// }

for await (const chunk of readFileChunks(filePath)) {
  console.log(chunk);
}
rl.close();

// main();
