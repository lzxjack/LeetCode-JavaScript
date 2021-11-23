const findAnagrams = (s, p) => {
    const need = new Map();
    const window = new Map();
    // 统计p中字符的个数
    for (const char of p) {
        need.set(char, (need.get(char) || 0) + 1);
    }
    // 定义左右指针
    let [left, right] = [0, 0];
    // 达到要求的字符数
    let valid = 0;
    const res = [];
    const lenS = s.length;
    const lenP = p.length;
    while (right < lenS) {
        // 右指针对应的字符，右指针右移
        const c = s[right++];
        if (need.get(c)) {
            // 若在need中，window中相应的+1
            window.set(c, (window.get(c) || 0) + 1);
            // 若window中，此字符达到了need中的数量，说明此字符满足要求
            if (window.get(c) === need.get(c)) valid++;
        }
        while (right - left >= lenP) {
            // 若valid等于need的大小，说明need中每个字符都满足要求了
            // 把左指针放入res
            if (valid === need.size) res.push(left);
            // 左指针对应的字符，左指针右移
            const d = s[left++];
            if (need.get(d)) {
                // 若出窗口的字符在need中，肯定不满足条件了，valid--
                if (window.get(d) === need.get(d)) valid--;
                // 将window中相应字符数-1
                window.set(d, window.get(d) - 1);
            }
        }
    }
    return res;
};
