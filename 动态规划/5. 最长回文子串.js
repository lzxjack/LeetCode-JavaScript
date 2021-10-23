const longestPalindrome = s => {
    const len = s.length;
    // dp数组初始化，一个n*n的矩阵，全为false
    const dp = new Array(len).fill(0).map(x => new Array(len).fill(false));
    // 最长子串的左右索引
    let [left, right] = [0, 0];
    // 最长子串长度
    let maxLen = 0;

    // 从下到上、从左到右遍历
    for (let i = len - 1; i >= 0; i--) {
        for (let j = i; j < len; j++) {
            // s[i] === s[j]才有可能是子串
            if (s[i] === s[j]) {
                if (j - i <= 1) {
                    // 表示a或者aa的情况
                    dp[i][j] = true;
                } else if (dp[i + 1][j - 1]) {
                    // 表示bab的情况
                    dp[i][j] = true;
                }
            }
            // 更新最长子串
            if (dp[i][j] && j - i + 1 > maxLen) {
                left = i;
                right = j;
                maxLen = j - i + 1;
            }
        }
    }

    return s.slice(left, right + 1);
};
