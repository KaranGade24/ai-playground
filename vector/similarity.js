const dotProduct = (a, b) => {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    const product = a[i] * b[i];
    sum += product;
  }
  console.log({ sum });
  return sum;
};

const magnitude = (v) => {
  let sum = 0;
  for (const value of v) {
    const product = value * value;
    sum += product;
  }
  console.log(Math.sqrt(sum));
  return Math.sqrt(sum);
};

export const cosineSimilarity = (a, b) => {
  // 1. dot product
  const dotProductResult = dotProduct(a, b);

  //  2. magnetude of a
  const magnitudeOfA = magnitude(a);
  //  3. magnetidu of b
  const magnitudeOfB = magnitude(b);

  //  4. cosineSimilarity dotProduct of a,b / mag. of a * mag. of b
  const cosineSimilarity = dotProductResult / (magnitudeOfA * magnitudeOfB);

  //   5. return result
  console.log({ cosineSimilarity });
  return cosineSimilarity;
};
