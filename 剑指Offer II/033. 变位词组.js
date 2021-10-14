const groupAnagrams = strs => {
    const map = new Map();
    // 处理空字符
    const blank = [];
    for (const str of strs) {
        if (str === '') {
            // 如果字符为空，单独放入blank
            blank.push(str);
            continue;
        }
        // 将字符串排序
        const arrSort = str.sort().join('');
        // 分组记录，用'-'连接
        map.set(arrSort, map.get(arrSort) ? `${map.get(arrSort)}-${str}` : str);
    }
    const res = [];
    for (const item of map) {
        // 将每组转化为数组
        res.push(item[1].split('-'));
    }
    // 若blank有空字符，则单独再放入
    if (blank.length) res.push(blank);
    return res;
};
