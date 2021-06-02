// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
// 注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。

// 示例 1：
// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"

// 示例 2：
// 输入：s = "a", t = "a"
// 输出："a"

var minWindow = function(s, t) {
    let l = 0;
    let r = 0;
    const need = new Map();
    for (let v of t) {
        need.set(v, need.has(v) ? need.get(v) + 1 : 1);
    }
    let needType = need.size;
    let res = '';
    while (r < s.length) {
        // 第一层while移动右窗口
        const v1 = s[r];
        if (need.has(v1)) {
            need.set(v1, need.get(v1) - 1);
            if (need.get(v1) === 0) needType--;
        }
        while (needType === 0) {
            // 第二层while移动左窗口
            // substring()左闭右开
            const newRes = s.substring(l, r + 1);
            if (!res || newRes.length < res.length) res = newRes;
            const v2 = s[l];
            if (need.has(v2)) {
                need.set(v2, need.get(v2) + 1);
                if (need.get(v2) === 1) needType++;
            }
            l++;
        }
        r++;
    }
    return res;
};

// 时间：o(m+n),m是t的长度，n是s的长度
// 空间： o(k)，k是t中不同字符的个数