// ### 解题思路
// 1. 创建两个哈希表st和ts
// 2. st：s中的字符为键，t中对应字符为值
// 3. ts：t中的字符为键，s中对应字符为值
// 4. 边填充边判断，若两遍对应的不相符，返回false
// 5. 遍历结束，返回true

// ### 代码
const isIsomorphic = (s, t) => {
    const st = {};
    const ts = {};
    const len = s.length;
    for (let i = 0; i < len; i++) {
        const x = s[i];
        const y = t[i];
        if ((st[x] && st[x] !== y) || (ts[y] && ts[y] !== x)) return false;
        st[x] = y;
        ts[y] = x;
    }
    return true;
};
