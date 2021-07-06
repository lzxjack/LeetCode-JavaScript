const uniquePaths = (m, n) => {
    const dp = [];
    // dp数组初始化
    // dp[i][0] = 1;
    // dp[0][j] = 1;
    for (let i = 0; i < m; i++) {
        dp[i] = [];
        dp[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }
    console.log(dp);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};

uniquePaths(3, 7);
