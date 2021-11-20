const findLHS = nums => {
    // 使用map统计每个数字出现的个数
    const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    let max = 0;
    // 找到当前元素的个数与(当前元素+1)出现的个数之和 的最大值
    for (const [key, value] of map) {
        max = Math.max(max, value + map.get(key + 1) || 0);
    }
    return max;
};
