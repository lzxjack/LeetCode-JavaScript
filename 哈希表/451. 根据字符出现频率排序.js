const frequencySort = s => {
    let res = '';
    const map = new Map();

    // 遍历s，统计计数
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    // map根据次数排序，返回数组
    const countArr = [...map].sort((a, b) => b[1] - a[1]);

    for (const [char, count] of countArr) {
        // 利用repeat()方法，对char重复count次
        res += char.repeat(count);
    }

    return res;
};
