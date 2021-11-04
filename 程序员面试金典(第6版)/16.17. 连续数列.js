// const maxSubArray = nums => {
//     const dp = [nums[0]];
//     let max = dp[0];
//     const len = nums.length;
//     for (let i = 1; i < len; i++) {
//         dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
//         // 更新最大值
//         max = Math.max(max, dp[i]);
//     }
//     console.log(dp);
//     return max;
// };

const maxSubArray = nums => {
    let sum = nums[0];
    let max = nums[0];
    const len = nums.length;
    for (let i = 1; i < len; i++) {
        sum = Math.max(sum + nums[i], nums[i]);
        max = Math.max(max, sum);
    }
    return max;
};
