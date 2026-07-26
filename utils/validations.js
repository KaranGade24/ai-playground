export const emptyValidatorCLI_input = (input) => {
  if (input.trim() === "") {
    console.log("Please enter input.");
    return { sucess: false };
  }
  return { sucess: true };
};

export const emailValidation = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) {
    return { sucess: true };
  } else {
    console.log("Enter the valid email.");
    return { sucess: false };
  }
};
