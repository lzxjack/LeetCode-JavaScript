const partitionLabels = s => {
    const map = new Map();
    const len = s.length;
    for (let i = 0; i < len; i++) {
        // 存储最远距离
        map.set(s[i], i);
    }
    const res = [];
    // 切割的开始位置
    let start = 0;
    // 存储最大的索引位置
    let maxIndex = 0;
    for (let i = 0; i < len; i++) {
        // 更新最大索引
        maxIndex = Math.max(maxIndex, map.get(s[i]));
        if (maxIndex === i) {
            // 如果遇到最大索引和当前字母的最远距离相同了
            // 说明该字母在后面不会再出现了
            // 切割 start~maxIndex 这些字母
            res.push(maxIndex - start + 1);
            // 更新起点处为下一个位置
            start = i + 1;
        }
    }
    return res;
};
