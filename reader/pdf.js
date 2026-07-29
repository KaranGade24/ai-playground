import { decode, encode } from "gpt-tokenizer";
import { PdfReader } from "pdfreader";

export async function* readPDFfile(filePath = "", TOKEN_SIZE = 1000) {
  try {
    let queue = [];
    let finished = false;
    let error = null;
    let bufferToken = [];

    let notify = null;
    let waitForData = new Promise((resolve) => {
      notify = resolve;
    });

    const PDF = new PdfReader();
    PDF.parseFileItems(filePath, (err, item) => {
      if (err) {
        // console.error(err);
        error = err;
        finished = true;
        notify();
        return;
      } else if (!item) {
        // console.log("Finished");
        finished = true;
        notify();
        return;
      } else if (item.text) {
        // queue.push(item.text);
        bufferToken.push(...encode(item.text));

        notify();

        waitForData = new Promise((resolve) => {
          notify = resolve;
        });
      }
    });

    while (!finished || bufferToken.length > 0) {
      if (error) throw error;

      if (bufferToken.length >= TOKEN_SIZE) {
        const chunk = bufferToken.splice(0, TOKEN_SIZE);
        yield decode(chunk);
        continue;
      }
      if (finished) {
        break;
      }
      await waitForData;
    }
    if (bufferToken.length > 0) {
      yield decode(bufferToken);
    }
  } catch (error) {
    console.error("Error in reading pdf file.", error);
  }
}
