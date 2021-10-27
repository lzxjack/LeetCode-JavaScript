const reorderedPowerOf2 = n => {
    const set = new Set();
    // 一共有30个2的幂
    for (let i = 0; i < 30; i++) {
        // 将每个2的幂的字符串排序后，放入set
        const str = String(2 ** i)
            .split('')
            .sort()
            .join('');
        set.add(str);
    }
    // 查找n的字符串，排序后，有没有在set中出现过
    return set.has(String(n).split('').sort().join(''));
};
