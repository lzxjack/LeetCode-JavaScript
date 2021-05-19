const reverseBits = n => {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        // res = res先左移1位 + n的最后一位
        res = (res << 1) + (n & 1);
        // n无符号右移一位
        n = n >>> 1;
    }
    // res转化为无符号
    return res >>> 0;
};
