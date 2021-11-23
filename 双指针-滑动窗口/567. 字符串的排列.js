const checkInclusion = (s1, s2) => {
    const [s1Len, s2Len] = [s1.length, s2.length];
    if (s1Len > s2Len) return false;
    // 需要比对的值
    const flag = s1.split('').sort().toString();
    for (let i = 0; i <= s2Len - s1Len; i++) {
        // 定义窗口数组，窗口长度为s1的长度
        const winArr = s2.slice(i, i + s1Len);
        // 如果该窗口等于flag，返回true
        if (flag === winArr.split('').sort().toString()) return true;
    }
    return false;
};
