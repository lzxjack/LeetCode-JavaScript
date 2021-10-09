const getMaximumGenerated = n => {
    // 初始化数组
    const nums = [0, 1];
    // 如果n=0或者n=1，直接返回对应的值
    if (n < 2) return nums[n];
    // n>=2，最大值初始化为1
    let max = 1;

    for (let i = 0; i <= n; i++) {
        console.log(nums[i >> 1]);
        const [m, n] = [i % 2, 1 - (i % 2)];
        nums[i] =
            m * nums[(i >> 1) | 0] + n * (nums[((i - 1) >> 1) | 0] + nums[((i + 1) >> 1) | 0]);
        max = nums[i] > max ? nums[i] : max;
    }
    console.log(nums);
};
