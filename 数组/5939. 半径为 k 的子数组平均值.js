const getAverages = (nums, k) => {
    const len = nums.length;
    // 初始化res，全部为-1
    const res = new Array(len).fill(-1);
    // 求前缀和
    const preSum = [...nums];
    for (let i = 1; i < len; i++) {
        preSum[i] += preSum[i - 1];
    }
    // 计算每个位置的平均值
    // 注意起点位置和终点位置
    for (let i = k; i <= len - k - 1; i++) {
        const sum = preSum[i + k] - (preSum[i - k - 1] || 0);
        res[i] = Math.floor(sum / (2 * k + 1));
    }
    return res;
};
