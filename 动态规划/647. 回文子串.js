const countSubstrings = s => {
    const len = s.length;
    let res = 0;
    // 创建dp数组并初始化为false
    const dp = new Array(len).fill(0).map(x => new Array(len).fill(false));

    for (let i = len - 1; i >= 0; i--) {
        for (let j = i; j <= len - 1; j++) {
            // s[i] === s[j]的情况下才可能出现回文串
            if (s[i] === s[j]) {
                if (j - i <= 1) {
                    // 区间长度1或2，如：
                    // 'a'或'aa'，肯定是回文串
                    res++;
                    dp[i][j] = true;
                } else {
                    // 区间长度大于2，需要判断里面一层
                    if (dp[i + 1][j - 1]) {
                        res++;
                        dp[i][j] = true;
                    }
                }
            }
        }
    }
    return res;
};
