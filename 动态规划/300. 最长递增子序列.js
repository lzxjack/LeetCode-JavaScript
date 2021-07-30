const lengthOfLIS = nums => {
    const len = nums.length;
    if (len === 1) return 1;
    const dp = new Array(len).fill(1);
    let res = 0;
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
        }
        // 更新最大子序列长度
        res = dp[i] > res ? dp[i] : res;
    }
    return res;
};
