const subarraySum = (nums, k) => {
    const map = new Map();
    // 键：前缀和
    // 值：出现的次数
    map.set(0, 1);
    let count = 0;
    let preSum = 0;
    for (const num of nums) {
        // 前缀和
        preSum += num;
        // 如果之前出现过preSum - k的前缀和，累加到count
        count += map.get(preSum - k) || 0;
        // 存储当前前缀和出现的次数
        map.set(preSum, (map.get(preSum) || 0) + 1);
    }
    return count;
};
