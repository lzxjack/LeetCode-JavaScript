const arrangeCoins = n => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
        if (sum > n) return i - 1;
    }
    // n==1的情况
    return 1;
};
