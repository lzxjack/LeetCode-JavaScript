const permutation = S => {
    if (!S.length) return [''];
    const res = [];
    // path是组合的字符串
    const search = path => {
        if (path.length === S.length) {
            // 长度满足条件，推入res数组
            res.push(path);
            return;
        }
        for (const s of S) {
            // 将路径中没出现过的字母，拼接到路劲，再次组合
            if (path.indexOf(s) === -1) {
                search(`${path}${s}`);
            }
        }
    };
    // 从空字符串开始
    search('');
    return res;
};
