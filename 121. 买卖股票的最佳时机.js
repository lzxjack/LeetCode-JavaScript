const maxProfit = prices => {
    // 先定义第一天为最低价格
    let min = prices[0];
    // 利润
    let profit = 0;
    // 遍历数据
    for (let i = 1; i < prices.length; i++) {
        // 如果发现比最低价格还低的，更新最低价格
        if (prices[i] < min) {
            min = prices[i];
            // 如果发现当前利润比之前高的，更新利润
        } else if (prices[i] - min > profit) {
            profit = prices[i] - min;
        }
    }
    return profit;
};
