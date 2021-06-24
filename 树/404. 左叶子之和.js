const sumOfLeftLeaves = root => {
    if (!root) return 0;
    // 定义和变量
    let sum = 0;
    // 定义标识左叶子的变量
    let isLeft = false;
    const dfs = root => {
        if (!root.left && !root.right && isLeft) {
            sum += root.val;
            return;
        }
        if (root.left) {
            isLeft = true;
            dfs(root.left);
        }
        if (root.right) {
            isLeft = false;
            dfs(root.right);
        }
    };
    // 首先根节点放入dfs
    dfs(root);
    return sum;
};
