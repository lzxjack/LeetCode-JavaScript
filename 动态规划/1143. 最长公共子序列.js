// 1. dp[i][j]含义：[0, i - 1]的字符串text1与[0, j - 1]的字符串text2的最⻓公共⼦序列为dp[i][j]
// 2. 递推公式：若text1[i - 1] === text2[j - 1],dp[i][j] = dp[i - 1][j - 1] + 1;否则，dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
// 3. 最上边、最左边肯定全是0，剩下的也可以初始化为0
// 4. 遍历顺序：从上到下，从左到右

const longestCommonSubsequence = (text1, text2) => {
    const [m, n] = [text1.length, text2.length];
    const dp = new Array(m + 1).fill(0).map(x => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
};
