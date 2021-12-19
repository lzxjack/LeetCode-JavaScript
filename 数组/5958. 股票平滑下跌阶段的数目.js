const getDescentPeriods = prices => {
    // count初始值为prices长度
    let count = prices.length;
    // 连续递减数的个数
    let k = 1;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] - prices[i + 1] === 1) {
            k++;
            continue;
        }
        // k个连续递减数，总共有 (k * (k - 1))/2 个阶段
        count += (k * (k - 1)) / 2;
        // 继续向后找，k初始化
        k = 1;
    }
    return count;
};
