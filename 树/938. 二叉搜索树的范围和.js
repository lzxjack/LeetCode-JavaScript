const rangeSumBST = (root, low, high) => {
    // 递归出口
    if (!root) return 0;
    // 根节点值大于high，直接遍历左子树
    if (root.val > high) {
        return rangeSumBST(root.left, low, high);
    }
    // 根节点值小于low，直接遍历右子树
    if (root.val < low) {
        return rangeSumBST(root.right, low, high);
    }
    // 根节点值在[low,high]之间
    return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
};
