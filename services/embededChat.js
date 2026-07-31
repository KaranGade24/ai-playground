import { embededContent } from "../content/embedContent.js";
import { generateContent } from "../content/generateContent.js";
import { CLI_input } from "../utils/CLI_input.js";
import { cosineSimilarity } from "../vector/similarity.js";
import { getVectorstore } from "../vector/vectorStore.js";

export const embededChat = async () => {
  try {
    const result = [];
    const vectorStore = getVectorstore();
    const { value: query } = await CLI_input("You: ");
    const embededResponse = await embededContent(query);
    const embededQuery = embededResponse.embeddings[0].values;

    for (const vector of vectorStore) {
      const score = cosineSimilarity(vector.embedding, embededQuery);

      result.push({
        score,
        text: vector.text,
      });
    }

    const topChunks = result.sort((a, b) => b.score - a.score).slice(0, 2);
    console.log({ topChunks });
    const prompt = `
Context:

${topChunks[0].text}

${topChunks[1].text}

Question:
${query}

Answer using only the provided context.
`;

    const responce = await generateContent(prompt);
    console.log("AI: ", responce);
  } catch (error) {
    console.error("Error in embeded chat", error);
  }
};
