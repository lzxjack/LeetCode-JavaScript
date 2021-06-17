// const minCostClimbingStairs = cost => {
//     const n = cost.length;
//     const dp = [0, 0];
//     // i从2开始
//     for (let i = 2; i <= n; i++) {
//         dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
//     }
//     return dp[n];
// };

const minCostClimbingStairs = cost => {
    const n = cost.length;
    let pre = 0,
        cur = 0;
    for (let i = 2; i <= n; i++) {
        const next = Math.min(cur + cost[i - 1], pre + cost[i - 2]);
        pre = cur;
        cur = next;
    }
    return cur;
};
