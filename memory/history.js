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
  try {
    if (response !== "") {
      history.push({
        role: "model",
        parts: [{ text: response }],
      });
    }
  } catch (error) {
    console.log("Error in adding model message in history", error);
  }
};

export const removeOldHistory = () => {
  try {
    if (history.length > 10) {
      // remove user histrory
      // shift function removes the first element
      history.shift();

      // remove AI response history
      history.shift();
    }
  } catch (error) {
    console.log("Error in removing history", error);
  }
};
