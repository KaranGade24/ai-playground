import { createReadStream } from "fs";

export async function* readFileChunks(filePath = "") {
  try {
    if (filePath === "") {
      return {
        success: false,
        message: "Please porvide file path.",
        data: null,
      };
    }

    const stream = await createReadStream(filePath, {
      encoding: "utf-8",
      highWaterMark: 64 * 1024,
    });

    let buffer = "";
    const CHUNKS_SIZE = 1000;
    for await (const piece of stream) {
      buffer += piece;

      while (buffer.length >= CHUNKS_SIZE) {
        const chunks = buffer.slice(0, CHUNKS_SIZE);
        // console.log(chunks);
        yield chunks;

        buffer = buffer.slice(CHUNKS_SIZE);
      }
    }

    if (buffer.length > 0) {
      //   console.log(buffer);
      yield buffer;
    }
  } catch (error) {
    console.log("Error in reading file", error);
    return {
      success: false,
      message: `Error in reading file ${error.message}`,
      data: null,
    };
  }
}
