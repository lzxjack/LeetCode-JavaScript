const singleNonDuplicate = nums => {
  let [left, right] = [0, nums.length];
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] === nums[mid ^ 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return nums[left];
};
