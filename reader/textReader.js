import { chunkGenerator } from "../chunking/chunkGenerator.js";
import { creatFileStream } from "../utils/readFilechunks.js";

export const readTextFile = (filePath = "", TOKEN_SIZE = 1000) => {
  try {
    const stream = creatFileStream(filePath);

    return chunkGenerator(stream, TOKEN_SIZE);
  } catch (error) {
    console.error("Error in reading text file.", error);
  }
};
