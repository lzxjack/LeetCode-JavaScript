const minimumDifference = (nums, k) => {
  nums.sort((a, b) => a - b);
  let min = Infinity;
  const len = nums.length;
  let [left, right] = [0, k - 1];
  while (right < len) {
    min = Math.min(min, nums[right] - nums[left]);
    left++;
    right++;
  }
  return min;
};
