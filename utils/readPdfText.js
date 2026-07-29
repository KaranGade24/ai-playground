import { PdfReader } from "pdfreader";

export async function* readPDFtext(filePath = "", TOKEN_SIZE = 1000) {
  try {
    let finished = false;
    let error = null;
    let buffer = [];

    let notify = null;
    let waitForData = new Promise((resolve) => {
      notify = resolve;
    });

    const PDF = new PdfReader();
    PDF.parseFileItems(filePath, async (err, item) => {
      if (err) {
        error = err;
        finished = true;
        notify();
        return;
      } else if (!item) {
        finished = true;
        notify();
        return;
      } else if (item.text) {
        buffer.push(item.text);
        notify();

        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 10);
        });

        waitForData = new Promise((resolve) => {
          notify = resolve;
        });
      }
    });

    while (!finished || buffer.length > 0) {
      if (error) throw error;

      if (buffer.length > 0) {
        yield buffer.shift();
        continue;
      }

      if (finished) {
        break;
      }
      await waitForData;
    }
  } catch (error) {
    console.error("Error in reading pdf file.", error);
  }
}
