const toHex = num => {
    if (num === 0) return '0';
    let res = '';
    const hex = '0123456789abcdef';
    while (num !== 0 && res.length < 8) {
        // num & 0xf将最低的四位取出，对应到16进制上
        res = hex[num & 0xf] + res;
        // 右移4位
        num >>= 4;
    }
    return res;
};
