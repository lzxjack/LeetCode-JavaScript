const minimumBuckets = street => {
    // 一些特殊情况
    if (street.indexOf('HHH') !== -1) return -1;
    if (street === 'H') return -1;
    if (street.indexOf('HH') === 0) return -1;
    if (street[street.length - 1] === 'H' && street[street.length - 2] === 'H') return -1;
    let res = 0;
    // 先统计H.H的个数
    const arr = street.split('H.H');
    res += arr.length - 1;
    // 再将H.H排除
    const newS = arr.join('-');
    const len = newS.length;
    for (let i = 0; i < len; i++) {
        const cur = newS[i];
        const next = newS[i + 1] || '';
        // '.H'和'H.'都可以，但要注意跳过一次遍历，i++
        if (cur === '.' && next === 'H') {
            res++;
            i++;
        }
        if (cur === 'H' && next === '.') {
            res++;
            i++;
        }
    }
    return res;
};
