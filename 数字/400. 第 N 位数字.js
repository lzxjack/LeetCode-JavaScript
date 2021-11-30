const findNthDigit = n => {
    let i = 1;
    while (i * 10 ** i < n) {
        n += 10 ** i;
        i++;
    }
    return `${n / i}`[n % i];
};
