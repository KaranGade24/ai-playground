export const history = [];

export const addUserMessage = (prompt) => {
  if (text !== "") {
    history.push({
      role: "user",
      parts: [{ text: prompt }],
    });
  }
};

export const addModelMessage = (response) => {
  if (text !== "") {
    history.push({
      role: "model",
      parts: [{ text: response }],
    });
  }
};

export const removeOldHistory = () => {
  if (history.length > 10) {
    // remove user histrory
    // shift function removes the first element
    history.shift();

    // remove AI response history
    history.shift();
  }
};
