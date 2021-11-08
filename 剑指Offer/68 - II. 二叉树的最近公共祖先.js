const lowestCommonAncestor = (root, p, q) => {
    // 树空、根节点等于p或q，那么root是最近公共祖先
    if (!root || root === p || root === q) return root;
    // 向左子树寻找节点相同的点
    const left = lowestCommonAncestor(root.left, p, q);
    // 向右子树寻找节点相同的点
    const right = lowestCommonAncestor(root.right, p, q);
    // 若左右各找到一个，那么当前根节点就是最近公共祖先
    if (left && right) return root;
    // 只有左边找到，那么最近公共祖先在左边
    if (left) return left;
    // 只有右边找到，那么最近公共祖先在左边
    if (right) return right;
};
