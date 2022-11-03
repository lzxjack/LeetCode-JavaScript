const minSteps = n => {
    let res = 0;
    for (let i = 2; i <= n; i++) {
        while (!(n % i)) {
            res += i;
            n /= i;
        }
    }
    return res;
};
