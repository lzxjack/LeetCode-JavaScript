// const countBits = n => {
//     if (n < 1) return [n];
//     const dp = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         if (i & 1) {
//             dp[i] = dp[i >> 1] + 1;
//         } else {
//             dp[i] = dp[i >> 1];
//         }
//     }
//     return dp;
// };

const countBits = n => {
    if (n < 1) return [n];
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i >> 1] + (i & 1);
    }
    return dp;
};
