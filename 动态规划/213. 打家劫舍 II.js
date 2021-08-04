const rob = nums => {
    if (nums.length === 1) return nums[0];

    // 198.打家劫舍函数
    const robRange = (nums, start, end) => {
        // 数组长度
        const len = nums.length;
        // dp数组初始化
        const dp = new Array(len).fill(null);
        dp[start] = nums[start];
        dp[start + 1] = Math.max(nums[start], nums[start + 1]);
        // 从下标2开始遍历
        for (let i = start + 2; i <= end; i++) {
            dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
        }
        return dp[end];
    };

    // 只考虑[0,nums.length-2]范围内的答案
    const res1 = robRange(nums, 0, nums.length - 2);
    // 只考虑[1,nums.length-1]范围内的答案
    const res2 = robRange(nums, 1, nums.length - 1);

    // 取最大值
    return Math.max(res1, res2);
};
