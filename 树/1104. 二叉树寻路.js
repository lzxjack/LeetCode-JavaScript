const pathInZigZagTree = label => {
    // 确定行数
    const row = Math.ceil(Math.log2(label + 1));
    const res = [label];
    // 偶数行，节点序号改变
    if (row % 2 === 0) label = 2 ** (row - 1) + 2 ** row - 1 - label;
    // 向上遍历父节点
    for (let i = row - 1; i > 0; i--) {
        // 当前节点的父节点
        label = label >> 1;
        if (i % 2 === 0) {
            // 偶数行，节点序号改变
            res.unshift(2 ** (i - 1) + 2 ** i - 1 - label);
        } else {
            // 奇数行，直接放入res
            res.unshift(label);
        }
    }
    return res;
};
