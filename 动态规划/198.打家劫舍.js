const rob = nums => {
    // 数组长度
    const len = nums.length;
    // dp数组初始化
    const dp = [nums[0], Math.max(nums[0], nums[1])];
    // 从下标2开始遍历
    for (let i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[len - 1];
};

// k个房屋打劫的钱 = max { k - 2 个房屋打劫的钱 + 第k号房屋的钱, k - 1 个房屋打劫的钱 }
