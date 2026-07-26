export const numberValidator = (value) => {
  const num = Number(value.trim());

  if (Number.isNaN(num)) {
    console.log("Please enter a valid number.");
    return { success: false };
  }

  return { validatedValue: num, success: true };
};
