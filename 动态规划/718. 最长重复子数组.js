const findLength = (nums1, nums2) => {
    const [m, n] = [nums1.length, nums2.length];
    const dp = [];
    // dp数组初始化
    // 先让所有元素为0
    for (let i = 0; i <= m; i++) {
        dp[i] = [];
        for (let j = 0; j <= n; j++) {
            dp[i].push(0);
        }
    }

    let res = 0;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            res = dp[i][j] > res ? dp[i][j] : res;
        }
    }
    return res;
};
