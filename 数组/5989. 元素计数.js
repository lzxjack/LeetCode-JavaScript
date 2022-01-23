const countElements = nums => {
  nums.sort((a, b) => a - b);
  let [i, j] = [0, nums.length - 1];
  while (nums[i + 1] === nums[i]) i++;
  while (nums[j - 1] === nums[j]) j--;
  return j - i - 1 >= 0 ? j - i - 1 : 0;
};
