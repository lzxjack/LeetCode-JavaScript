const searchRange = (nums, target) => {
    let [left, right] = [0, nums.length - 1];
    while (nums[left] !== target && left < nums.length) {
        left++;
    }
    while (nums[right] !== target && right > 0) {
        right--;
    }
    return right >= left ? [left, right] : [-1, -1];
};
