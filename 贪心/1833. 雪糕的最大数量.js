const maxIceCream = (costs, coins) => {
    costs.sort((a, b) => a - b);
    let [priceSum, count] = [0, 0];

    for (let i = 0; i < costs.length; i++) {
        priceSum += costs[i];
        if (priceSum <= coins) {
            count++;
        } else {
            break;
        }
    }
    return count;
};
