const maxUncrossedLines = (nums1, nums2) => {
    // 两个数组长度
    const [m, n] = [nums1.length, nums2.length];
    // 创建dp数组并都初始化为0
    const dp = new Array(m + 1).fill(0).map(x => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // 根据两种情况更新dp[i][j]
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    // 返回dp数组中右下角的元素
    return dp[m][n];
};
