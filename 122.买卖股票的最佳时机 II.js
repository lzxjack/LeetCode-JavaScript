var maxProfit = function(prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        let money = prices[i] - prices[i - 1];
        if (money > 0) profit += money;
    }
    return profit;
};