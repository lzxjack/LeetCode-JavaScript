// 1. set
const findRepeatedDnaSequences = s => {
    const len = s.length;
    const res = [];
    // 长度小于等于10，直接返回空数组
    if (len <= 10) return res;
    const set = new Set();
    let i = 0;
    while (i + 9 < len) {
        // 维护长度为10的滑动窗口
        const str = s.slice(i, i + 10);
        // 当前窗口如果set中已经存在，放入res
        if (set.has(str)) res.push(str);
        // 当前窗口加入set
        set.add(str);
        i++;
    }
    // 数组去重
    return [...new Set(res)];
};

// 2. map
// const findRepeatedDnaSequences = s => {
//     const len = s.length;
//     const res = [];
//     // 长度小于等于10，直接返回空数组
//     if (len <= 10) return res;
//     const map = new Map();
//     let i = 0;
//     while (i + 9 < len) {
//         // 维护长度为10的滑动窗口
//         const str = s.slice(i, i + 10);
//        // 放入map计数
//         map.set(str, (map.get(str) || 0) + 1);
//         i++;
//     }
//     for (const item of map) {
//         // 挑选出次数大于1的
//         if (item[1] > 1) res.push(item[0]);
//     }
//     return res;
// };
