// 常规写法
const fib = n => {
    if (n <= 1) return n;
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

// 精简写法
const fib = n => {
    if (n <= 1) return n;
    const dp = [0, 1];
    let sum = null;
    for (let i = 2; i <= n; i++) {
        sum = dp[0] + dp[1];
        dp[0] = dp[1];
        dp[1] = sum;
    }
    return sum;
};
