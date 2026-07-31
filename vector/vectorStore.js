const vectorStore = [];

export const getVectorstore = () => {
  return vectorStore;
};

export const addVectorEmbedding = (obj) => {
  const id = uniqueIdGenerator();
  obj["id"] = id;
  vectorStore.push(obj);
};

// export const searchEmbeddingById = (id = null) => {
//   if (!id) throw new Error("Please provide id to search embedding.");

//   const embedding = vectorStore.find((vectorObj) => vectorObj.id === id);
//   if (!embedding) {
//     throw new Error(`There is no vector embedding for ${id} this id`);
//     return;
//   }
//   return embedding;
// };

// export const vectorStorageSize = () => {
//   const size = vectorStore.length;
//   return size;
// };

// export const deleteEmbeddingById = (id = null) => {
//   if (!id) throw new Error("Please provide id to delete embedding.");

//   const filterdEmbedding = vectorStore.filter(
//     (vectorObj) => vectorObj.id !== id,
//   );
//   vectorStore = filterdEmbedding;
// };

// export const deleteAllEmbeddings = () => {
//   vectorStore = [];
// };

export const uniqueIdGenerator = () => {
  const id = crypto.randomUUID();
  return id;
};

// {
// id :dfybfvc-fgfdvxc-dvbf-dfadsbfv,
// chatId: ehbgkjeg-hrd-afggfv-csdf-b
// title: "javascript notes"
// embeddings:[],
//  hasDocuments: true,
//   documents: [
//     {
//       fileId: "pdf1",
//       fileName: "js.pdf"
//     }
//   ]
// }
