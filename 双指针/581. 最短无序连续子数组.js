const findUnsortedSubarray = nums => {
    // 数组长度
    const len = nums.length;
    // low初始化在尾部，high初始化在头部
    let [low, high] = [len - 1, 0];
    // 最小值、最大值初始化
    let [min, max] = [nums[len - 1], nums[0]];
    for (let i = 1; i <= len; i++) {
        // 从后往前更新最小值
        min = Math.min(min, nums[len - 1 - i]);
        // 从前往后更新最大值
        max = Math.max(max, nums[i]);
        // nums[i] < max，说明nums[i]突然不递增了，更新high
        nums[i] < max && (high = i);
        // nums[len - 1 - i] > min，说明nums[len - 1 - i]突然不递减了，更新low
        nums[len - 1 - i] > min && (low = len - 1 - i);
    }
    return high > low ? high - low + 1 : 0;
};
