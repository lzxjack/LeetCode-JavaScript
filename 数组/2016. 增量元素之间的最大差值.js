const maximumDifference = nums => {
    // 假设元素最小值是nums[0]
    let min = nums[0];
    // 维护最大差值
    let max = -1;
    const len = nums.length;
    for (let i = 1; i < len; i++) {
        // 若遇到比最小值大的，再更新最大差值
        if (nums[i] > min) {
            max = Math.max(max, nums[i] - min);
        } else {
            // 更新最小值
            min = Math.min(min, nums[i]);
        }
    }
    return max;
};
