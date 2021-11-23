const buddyStrings = (s, goal) => {
    // 长度不相等，返回false
    if (s.length !== goal.length) return false;
    const sArr = s.split('');
    if (s === goal) {
        // 长度相等时，有重复元素，返回true
        if ([...new Set(sArr)].length !== s.length) return true;
        // 无重复元素，返回false
        return false;
    }

    let [first, second] = [-1, -1];
    const len = s.length;
    for (let i = 0; i < len; i++) {
        if (s[i] !== goal[i]) {
            if (first === -1) {
                first = i;
            } else if (second === -1) {
                second = i;
            } else {
                // 发现第3处不同，返回false
                return false;
            }
        }
    }
    // 最后为true的条件：有2处不同，且不同的位置交换后对应的元素相等
    return second !== -1 && s[first] === goal[second] && s[second] === goal[first];
};
