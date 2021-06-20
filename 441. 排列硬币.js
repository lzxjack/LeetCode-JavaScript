const arrangeCoins = n => {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i + 1;
        if (sum > n) return i;
    }
};
