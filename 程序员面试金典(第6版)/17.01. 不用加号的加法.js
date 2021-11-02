const add = (a, b) => {
    let c = 0;
    while (b) {
        // 进位
        c = (a & b) << 1;
        // 不考虑进位的加法
        a ^= b;
        // 将进位给b
        b = c;
    }
    return a;
};
