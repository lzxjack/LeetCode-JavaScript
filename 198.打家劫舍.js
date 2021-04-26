var rob = function(nums) {
    if (nums.length === 0) { return 0; }
    const dp = [0, nums[0]];
    for (let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
    }
    return dp[nums.length];
};

// k个房屋打劫的钱 = max { k - 2 个房屋打劫的钱 + 第k号房屋的钱, k - 1 个房屋打劫的钱 }