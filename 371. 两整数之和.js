const getSum = (a, b) => {
    if (b === 0) return a;
    return getSum(a ^ b, (a & b) << 1);
};
