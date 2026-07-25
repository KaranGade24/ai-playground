export const history = [];

export const addUserMessage = (prompt) => {
  try {
    if (prompt !== "") {
      history.push({
        role: "user",
        parts: [{ text: prompt }],
      });
    }
  } catch (error) {
    console.log("Error in adding user message in history", error);
  }
};

export const addModelMessage = (response) => {
  if (response !== "") {
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
