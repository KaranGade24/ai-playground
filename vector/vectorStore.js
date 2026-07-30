const vectorStore = [];

export const addVectorEmbedding = (obj) => {
  const id = uniqueIdGenerator();
  obj["id"] = id;
  vectorStore.push(obj);
};
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
