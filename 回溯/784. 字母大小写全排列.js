const letterCasePermutation = S => {
    const strArr = S.split('');
    const res = [];
    for (let i = 0; i < strArr.length; i++) {
        const s = strArr[i];
        if (isNaN(s)) {
            // 如果是字母
            if (res.length) {
                // 非首字符
                // 因为res中每个元素要复制个，所以j+=2
                for (let j = 0; j < res.length; j += 2) {
                    // 在下标j的位置上插入res[j]
                    res.splice(j, 0, res[j]);
                    // 添加一个小写字母
                    res[j] += s.toLowerCase();
                    // 复制的字符，添加一个大写字母
                    res[j + 1] += s.toUpperCase();
                }
            } else {
                // 首字符为字母，直接加小写字母和大写字母
                res.push(s.toLowerCase());
                res.push(s.toUpperCase());
            }
        } else {
            // 是数字
            if (res.length) {
                // 非首字符，直接加到每一个元素后面
                for (let i = 0; i < res.length; i++) {
                    res[i] += s;
                }
            } else {
                // 首字符是数字
                res.push(s);
            }
        }
    }
    return res;
};
