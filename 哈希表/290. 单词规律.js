const wordPattern = (pattern, s) => {
    const sArr = s.split(' ');
    const len = pattern.length;
    if (len !== sArr.length) return false;
    const ps = new Map();
    const sp = new Map();
    for (let i = 0; i < len; i++) {
        const x = pattern[i];
        const y = sArr[i];
        // 若其中有一个值作为键对应的值，与另一个值不相等，就不符合要求
        if ((ps.get(x) && ps.get(x) !== y) || (sp.get(y) && sp.get(y) !== x)) return false;
        // 将值作为键，另一个作为值存储
        ps.set(x, y);
        sp.set(y, x);
    }
    return true;
};
