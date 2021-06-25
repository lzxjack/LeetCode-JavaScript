const maxDepth = root => {
    // 递归出口
    if (!root) return 0;
    // 最大值
    let max = 0;
    // 遍历子树
    root.children &&
        root.children.forEach(item => {
            // 更新最大值
            max = Math.max(max, maxDepth(item));
        });
    return max + 1;
};
