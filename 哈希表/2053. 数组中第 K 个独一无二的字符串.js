const kthDistinct = (arr, k) => {
    // 创建Map
    const map = new Map();
    // 遍历数组，统计出现的个数
    for (const char of arr) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    const res = [];
    // 将出现1次的数，放入res
    for (const item of map) {
        if (item[1] === 1) res.push(item[0]);
    }
    // 返回第k个，若没有，返回''
    return res[k - 1] || '';
};
