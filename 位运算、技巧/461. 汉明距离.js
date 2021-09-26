const hammingDistance = (x, y) => {
    let a = x ^ y;
    let count = 0;
    while (a) {
        a = a & (a - 1);
        count++;
    }
    return count;
};
