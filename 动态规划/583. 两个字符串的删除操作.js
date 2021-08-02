const minDistance = (word1, word2) => {
    // 两个单词的长度
    const [m, n] = [word1.length, word2.length];
    // 创建二维数组dp
    const dp = new Array(m + 1).fill(0).map(x => new Array(n + 1).fill(0));
    // dp数组初始化
    // dp[i][0]代表其中一个单词为空，另一个单词长度为i，那么肯定初始化为i
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                // 若相等，不用删除
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // 若不相等，取三者(都删、删word1、删word2)的最小值
                dp[i][j] = Math.min(dp[i - 1][j - 1] + 2, dp[i - 1][j] + 1, dp[i][j - 1] + 1);
            }
        }
    }

    return dp[m][n];
};
