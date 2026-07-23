export const history = [];

export const userHistory = (text) => {
  if (text !== "") {
    history.push({
      role: "user",
      parts: [{ text }],
    });
  }
};

export const AiHistory = (text) => {
  if (text !== "") {
    history.push({
      role: "model",
      parts: [{ text }],
    });
  }
};

const removeOldHistory = () => {
  if (history.length > 10) {
    // remove user histrory
    // shift function removes the first element
    history.shift();

    // remove AI response history
    history.shift();
  }
};

removeOldHistory();
