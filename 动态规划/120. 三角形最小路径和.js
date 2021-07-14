// const minimumTotal = triangle => {
//     const h = triangle.length;
//     const dp = new Array(h);
//     for (let i = 0; i < h; i++) {
//         dp[i] = new Array(triangle[i].length);
//     }
//     for (let i = h - 1; i >= 0; i--) {
//         for (let j = 0; j < triangle[i].length; j++) {
//             if (i === h - 1) {
//                 dp[i][j] = triangle[i][j];
//             } else {
//                 dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
//             }
//         }
//     }
//     return dp[0][0];
// };

const minimumTotal = triangle => {
    // 最底下一行
    const bottom = triangle[triangle.length - 1];
    const dp = new Array(bottom.length);
    // dp初始化，为最下面一行
    for (let i = 0; i < dp.length; i++) {
        dp[i] = bottom[i];
    }
    // 从倒数第二行开始，向上循环
    for (let i = dp.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            // 等号右边的dp[j], dp[j + 1]是下一行的
            // 等号左边的dp[j]是当前行的
            // triangle[i][j]也是当前行的
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
        }
    }
    return dp[0];
};
