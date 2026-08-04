const addditionTool = (nums = []) => {
  return nums.reduce((acc, curr) => acc + curr, 0);
};

export const mathsTools = {
  addition: addditionTool,
};
