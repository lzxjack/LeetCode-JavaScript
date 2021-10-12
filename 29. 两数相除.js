const divide = (a, b) => {
    // 特殊情况
    if (!a) return 0;
    const [MIN, MAX] = [-(2 ** 31), 2 ** 31 - 1];
    if (a === MIN && b === -1) return MAX;
    if (a === MIN && b === 1) return MIN;

    // 是否为负数
    const isNeg = (a ^ b) < 0;
    // 取绝对值
    [a, b] = [Math.abs(a), Math.abs(b)];

    let res = 0;
    for (let i = 31; i >= 0; i--) {
        // 找出满足条件的最大的倍数
        if (a >>> i >= b) {
            // 累加上这个倍数
            res += 1 << i;
            // 被除数减去这个倍数*b
            a -= b << i;
        }
    }

    return isNeg ? -res : res;
};
