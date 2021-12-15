const findComplement = num => {
    // 计算num二进制数的长度
    const len = num.toString(2).length;
    // 构造长度为len、全为1的字符串
    const str = new Array(len).fill(1).join('');
    // 转化为二进制数
    const N = parseInt(str, 2);
    return N ^ num;
};
