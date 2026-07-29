import { actions } from "./providers/actions.js";
import { rl } from "./providers/readline.js";
import { CLI_input } from "./utils/CLI_input.js";
import { numberValidator } from "./utils/numberValidator.js";
import path from "path";
import { fileURLToPath } from "url";
import { readTextFile } from "./reader/text.js";
import { readPDFfile } from "./reader/pdf.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "demo.txt");
const pdfFilePath = path.join(__dirname, "Karan_Gade_Resume_8446726903.pdf");

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

for await (const text of readTextFile(filePath)) {
  console.log(text);
}

// for await (const text of readPDFfile(pdfFilePath, 1000)) {
//   console.log(text);
// }

rl.close();

// main();
