const waysToStep = n => {
    const mod = 1000000007;
    const dp = [null, 1, 2, 4];
    for (let i = 4; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % mod;
    }
    return dp[n];
};
