const convertToBase7 = num => {
    if (num === 0) return '0';
    // 标识正负号
    let isMinus = false;
    if (num < 0) {
        isMinus = true;
        // 如果是负数，取正数
        num = -num;
    }
    // 存放结果的数组
    const res = [];
    // 余数
    let remain = 0;
    while (num > 0) {
        remain = num % 7;
        num = Math.floor(num / 7);
        // 余数从队头放入数组
        res.unshift(remain);
    }
    // 判断正负号
    return isMinus ? '-' + res.join('') : res.join('');
};

console.log(convertToBase7(-100));
