// new
const firstMissingPositive = nums => {
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    // 将nums[i]放到对应的位置
    while (nums[i] > 0 && nums[i] <= len && nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }

  // 遍历是否是对应位置
  for (let i = 0; i < len; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }

  return len + 1;
};
