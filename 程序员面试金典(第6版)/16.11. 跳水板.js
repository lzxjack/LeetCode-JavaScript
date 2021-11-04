// const divingBoard = (shorter, longer, k) => {
//     const res = [];
//     for (let i = k; i >= 0; i--) {
//         const long = shorter * i + longer * (k - i);
//         long && !res.includes(long) && res.push(long);
//     }
//     return res;
// };

const divingBoard = (shorter, longer, k) => {
    if (!k) return [];
    // 差值
    const diff = longer - shorter;
    // 最短的长度
    let length = shorter * k;
    const res = [length];
    // 若差值为0，则直接返回[length]
    if (!diff) return res;

    // 循环计算length，每次将一个shorter换成longer
    // 相当于每次加一个diff
    for (let i = 1; i <= k; i++) {
        length += diff;
        res.push(length);
    }
    return res;
};
