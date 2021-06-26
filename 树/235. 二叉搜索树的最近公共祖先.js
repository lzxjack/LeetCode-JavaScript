const lowestCommonAncestor = (root, p, q) => {
    // 递归出口
    if (!root) return root;
    // 根节点值都大于两个数，则遍历左子树
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    // 根节点值都小于两个数，则遍历右子树
    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    // 否则，根节点一定在中间
    return root;
};
