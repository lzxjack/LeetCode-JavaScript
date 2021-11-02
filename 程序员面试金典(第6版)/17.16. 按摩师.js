const massage = nums => {
    const len = nums.length;
    if (!len) return 0;
    const dp = [nums[0], Math.max(nums[0], nums[1])];
    for (let i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[len - 1];
};
