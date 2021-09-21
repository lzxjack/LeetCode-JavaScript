const findNumberOfLIS = nums => {
    const [dp, count] = [[1], [1]];
    const len = nums.length;

    let max = 0;
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (dp[j] + 1 > dp[i]) {
                    count[i] = count[j];
                    dp[i] = dp[j] + 1;
                } else if (dp[j] + 1 === dp[i]) {
                    count[i] += count[j];
                }
            }
            max = dp[i] > max ? dp[i] : max;
        }
    }

    let res = 0;
    for (let i = 0; i < len; i++) {
        if (dp[i] === max) res += count[i];
    }

    return res;
};
