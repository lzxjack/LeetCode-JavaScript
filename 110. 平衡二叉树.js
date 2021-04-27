const isBalanced = function (root) {
    // 获取当前节点高度的递归函数
    const getH = root => {
        if (!root) return 0;
        // 返回左右节点的最大高度+1,（+1:根节点）
        return Math.max(getH(root.left), getH(root.right)) + 1;
    };
    // 能递归到达这里，这个子树肯定是平衡二叉树
    if (!root) return true;
    // 平衡二叉树的条件：
    return (
        // 1. 根节点的左右节点高度差不超过1
        Math.abs(getH(root.left) - getH(root.right)) <= 1 &&
        // 2. 左子树是平衡二叉树
        isBalanced(root.left) &&
        // 3. 右子树是平衡二叉树
        isBalanced(root.right)
    );
};
