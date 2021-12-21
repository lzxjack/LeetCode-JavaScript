const sumNumbers = root => {
    if (!root) return 0;
    let res = 0;
    const dfs = (root, sum) => {
        if (!root) return;
        // 更新sum
        sum = sum * 10 + root.val;
        // 若是叶子节点，则累加到res
        if (!root.left && !root.right) res += sum;
        dfs(root.left, sum);
        dfs(root.right, sum);
    };
    dfs(root, 0);
    return res;
};
