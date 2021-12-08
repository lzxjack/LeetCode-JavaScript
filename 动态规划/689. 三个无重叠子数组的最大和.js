const maxSumOfThreeSubarrays = (nums, k) => {
    const n = nums.length;
    const dp = Array.from(nums, () => Array.from({ length: 2 }, () => [-1, 0]));
    let max = 0;
    let ans = [-1, -1, -1];
    let win = 0;
    for (let i = 0; i < n; i++) {
        win += nums[i];
        const j = i - k + 1;
        if (j < 0) continue;
        dp[j][0][1] = win;
        for (let h = 0; h <= j - k; h++) {
            if (dp[h][1][1] + win > max) {
                max = dp[h][1][1] + win;
                ans = [dp[h][1][0], h, j];
            }
            if (dp[h][0][1] + win > dp[j][1][1]) {
                dp[j][1][0] = h;
                dp[j][1][1] = win + dp[h][0][1];
            }
        }
        win -= nums[j];
    }
    return ans;
};
