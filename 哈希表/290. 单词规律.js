const wordPattern = (pattern, s) => {
    const sArr = s.split(' ');
    const len = pattern.length;
    if (len !== sArr.length) return false;
    const ps = {};
    const sp = {};
    for (let i = 0; i < len; i++) {
        const x = pattern[i];
        const y = sArr[i];
        if ((ps[x] && ps[x] !== y) || (sp[y] && sp[y] !== x)) return false;
        ps[x] = y;
        sp[y] = x;
    }
    return true;
};

// ### 代码
// const isIsomorphic = (s, t) => {
//     const st = {};
//     const ts = {};
//     const len = s.length;
//     for (let i = 0; i < len; i++) {
//         const x = s[i];
//         const y = t[i];
//         if ((st[x] && st[x] !== y) || (ts[y] && ts[y] !== x)) return false;
//         st[x] = y;
//         ts[y] = x;
//     }
//     return true;
// };
