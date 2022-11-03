const runningSum = nums => {
    const len = nums.length;
    for (let i = 1; i < len; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
};

// 1. 从`i = 1`开始，循环遍历数组
// 2. 遍历时直接更新当前的数
// 3. `nums[i] = nums[i] + nums[i - 1]`
// 4. 最后返回原数组nums
