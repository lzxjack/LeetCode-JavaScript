const getMoneyAmount = n => {
    // 当i>=j时，dp[i][j]=0，故全部初始化为0
    const dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
    for (let i = n; i >= 1; i--) {
        for (let j = i + 1; j <= n; j++) {
            let min = Infinity;
            let cost;
            // 猜的数字是k，从i遍历到j
            for (let k = i; k < j; k++) {
                cost = k + Math.max(dp[i][k - 1], dp[k + 1][j]);
                min = Math.min(min, cost);
            }
            dp[i][j] = min;
        }
    }
    return dp[1][n];
};
