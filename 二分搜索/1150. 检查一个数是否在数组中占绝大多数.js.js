const isMajorityElement = (nums, target) => {
    let left = (right = (nums.length - 1) >> 1);
    if (nums[left] !== target) return false;

    while (nums[left - 1] === target) left--;
    while (nums[right + 1] === target) right++;

    const count = right - left + 1;

    return count > nums.length >> 1;
};
