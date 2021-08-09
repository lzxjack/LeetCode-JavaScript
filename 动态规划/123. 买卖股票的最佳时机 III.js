const maxProfit = prices => {
    const len = prices.length;
    const dp = new Array(5).fill(0);
    dp[1] = -prices[0];
    dp[3] = -prices[0];
    for (let i = 1; i < len; i++) {
        dp[1] = Math.max(dp[1], dp[0] - prices[i]);
        dp[2] = Math.max(dp[2], dp[1] + prices[i]);
        dp[3] = Math.max(dp[3], dp[2] - prices[i]);
        dp[4] = Math.max(dp[4], dp[3] + prices[i]);
    }
    return dp[4];
};
