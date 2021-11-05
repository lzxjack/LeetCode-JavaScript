const longestSubsequence = (nums, d) => {
    let max = 0;
    const dp = new Map();
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        dp.set(nums[i], (dp.get(nums[i] - d) || 0) + 1);
        max = Math.max(max, dp.get(nums[i]));
    }
    return max;
};
