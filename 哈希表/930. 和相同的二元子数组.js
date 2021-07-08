const numSubarraysWithSum = (nums, goal) => {
    // map存储前缀和为i的有map[i]个
    const map = {};
    // 初始化前缀和和返回的数量
    let [sum, count] = [0, 0];
    for (const num of nums) {
        // 记录前缀和
        map[sum] = (map[sum] || 0) + 1;
        // 更新前缀和
        sum += num;
        // 加上sum - goal的数量
        count += map[sum - goal] || 0;
    }
    return count;
};
