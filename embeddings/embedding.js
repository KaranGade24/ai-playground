import { embededContent } from "../content/embedContent.js";
import { readPDFfile } from "../reader/pdfReader.js";
import { readTextFile } from "../reader/textReader.js";
import { addVectorEmbedding } from "../vector/vectorStore.js";

export const generateEmbedding = async (
  filePath = "",
  TOKEN_SIZE = null,
  fileType = "",
) => {
  try {
    if (filePath === "" || fileType === "") {
      throw new Error("Please provide file path and file type.");
    }
    if (!TOKEN_SIZE) {
      throw new Error("Please provide token size.");
    }
    const action = actions[fileType];
    if (!action) {
      throw new Error("Please provide correct file type.(eg. text,pdf)");
    }
    for await (const content of action(filePath, TOKEN_SIZE)) {
      const response = await embededContent(
        content, // contect or text that proceed to convert into enbeddings
      );
      const obj = {
        id: null,
        text: content,
        embedding: response.embeddings[0].values,
      };
      console.log(obj);
      addVectorEmbedding(obj);
    }
    return;
  } catch (error) {
    console.error("Error in generating embedding.", error);
  }
};

const actions = {
  text: readTextFile,
  pdf: readPDFfile,
};
