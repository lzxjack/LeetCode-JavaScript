const integerBreak = n => {
    const dp = [null, null, 1];
    for (let i = 3; i <= n; i++) {
        dp[i] = 0;
        for (let j = 1; j <= i - 1; j++) {
            dp[i] = Math.max(dp[i], (i - j) * j, dp[i - j] * j);
        }
    }
    return dp[n];
};

// dp[i]代表拆分数字i，可得到最大的乘积为dp[i]
// 递推公式：dp[i] = max(dp[i], max((i - j) * j, dp[i - j] * j))
// dp[i]初始化：dp[2]=1
// 从前向后遍历
