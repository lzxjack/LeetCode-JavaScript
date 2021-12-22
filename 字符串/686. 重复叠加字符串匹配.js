const repeatedStringMatch = (a, b) => {
    // a、b长度
    const aLen = a.length;
    const bLen = b.length;
    // 初始化1次
    let res = a;
    let count = 1;
    while (res.indexOf(b) < 0) {
        // 当不包含b时，一直累加a
        res += a;
        count++;
        // 若res长度大于2*A+B，则B不可能会是A子串了
        if (res.length > 2 * aLen + bLen) return -1;
    }
    return count;
};
