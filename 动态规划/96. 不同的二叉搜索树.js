const numTrees = n => {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[i - j] * dp[j - 1];
        }
    }
    return dp[n];
};
