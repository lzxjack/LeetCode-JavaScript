const findNthDigit = n => {
    if (n < 10) return n;
    let i = 1;
    let num = 9;
    while (n >= num) {
        n -= num;
        i++;
        num = 9 * 10 ** (i - 1) * i;
    }
    n--;
    let start = 10 ** (i - 1) + parseInt(n / i) + '';
    return start[n % i];
};
