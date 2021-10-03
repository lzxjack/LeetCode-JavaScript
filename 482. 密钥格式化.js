const licenseKeyFormatting = (s, k) => {
    // 去除所有破折号，并全部转化为大写
    s = s.replace(/-/g, '').toUpperCase();
    // 转换后的长度
    const len = s.length;
    // 第一个分组的长度
    const fitstLen = len % k;
    const res = [];
    let index = 0;
    if (fitstLen) {
        // 如果len % k有值，则需要对第一个分组进行处理
        let temp = '';
        for (; index < fitstLen; index++) {
            // 取出fitstLen个字符
            temp += s[index];
        }
        res.push(temp);
    }
    // 依次处理后面的分组，每k个为一组
    while (index < len) {
        let temp = '';
        for (let i = 0; i < k; i++) {
            temp += s[index++];
        }
        res.push(temp);
    }
    // 最后用破折号连接
    return res.join('-');
};
