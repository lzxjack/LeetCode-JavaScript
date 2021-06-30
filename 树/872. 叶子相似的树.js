const leafSimilar = (root1, root2) => {
    // 深度优先遍历函数
    const dfs = (root, res) => {
        if (!root.left && !root.right) {
            // 如果是根节点，推入数组
            res.push(root.val);
        } else {
            // 不是根节点
            if (root.left) dfs(root.left, res);
            if (root.right) dfs(root.right, res);
        }
    };
    const [res1, res2] = [[], []];
    if (root1) dfs(root1, res1);
    if (root2) dfs(root2, res2);
    return res1.toString() === res2.toString();
};
