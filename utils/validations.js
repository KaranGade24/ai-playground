export const emptyValidatorCLI_input = (input) => {
  if (input.trim() === "") {
    console.log("Please enter input.");
    return { success: false };
  }
  return { success: true };
};

export const emailValidation = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) {
    return { success: true };
  } else {
    console.log("Enter the valid email.");
    return { success: false };
  }
};
