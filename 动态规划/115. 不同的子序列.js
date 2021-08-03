const numDistinct = (s, t) => {
    // 两个数组长度
    const [lenS, lenT] = [s.length, t.length];
    // 创建dp数组并都初始化为0
    const dp = new Array(lenS + 1).fill(0).map(x => new Array(lenT + 1).fill(0));
    for (let i = 0; i <= lenS; i++) dp[i][0] = 1;
    for (let j = 1; j <= lenT; j++) dp[0][j] = 0;
    for (let i = 1; i <= lenS; i++) {
        for (let j = 1; j <= lenT; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[lenS][lenT];
};
