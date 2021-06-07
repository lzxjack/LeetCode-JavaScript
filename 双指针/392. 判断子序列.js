const isSubsequence = (s, t) => {
    // 如果s为空，直接返回true
    if (s.length === 0) return true;
    // 定义两个指针
    let indexS = 0,
        indexT = 0;
    // 遍历t
    while (indexT < t.length) {
        // 如果两个当前两指针值相等，indexS右移
        // 并判断s是否遍历结束，若结束就返回true
        if (s[indexS] === t[indexT]) {
            indexS++;
            if (indexS > s.length - 1) return true;
        }
        // indexT右移
        indexT++;
    }
    // 遍历t遍历完成，还没有返回true，就返回false
    return false;
};
