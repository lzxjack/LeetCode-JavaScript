// new
const maxProduct = nums => {
  let max = nums[0];
  let min = nums[0];
  let res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num1 = max * nums[i];
    const num2 = min * nums[i];

    max = Math.max(num1, num2, nums[i]);
    min = Math.min(num1, num2, nums[i]);

    res = Math.max(max, res);
  }

  return res;
};
