// var climbStairs = function (n) {
//     if (n < 2) return 1;
//     // 第n阶所需的数量=第n-1阶所需的数量+第n-2阶所需的数量
//     // number0倒数第二个数，number1倒数第一个数
//     let number0 = 1;
//     let number1 = 1;
//     for (let i = 2; i <= n; i++) {
//         let temp = number0;
//         number0 = number1;
//         number1 = number1 + temp;
//     }
//     return number1;
// };

// 1:1
// 2:2
const climbStairs = n => {
    const dp = [null, 1, 2];
    if (n <= 2) return dp[n];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
