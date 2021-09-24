const longestPalindrome = s => {
    // 统计各个字母出现的次数
    const map = new Map();
    const len = s.length;
    for (let i = 0; i < len; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }

    let res = 0;
    // 遍历map
    for (const item of map) {
        // res累加上 出现次数-次数除以2的余数
        res += item[1] - (item[1] % 2);
    }
    // 如果有奇数字母的，res加1
    if (res < len) res++;

    return res;
};
