const inorderSuccessor = (root, p) => {
    if (root.val > p.val) {
        // p在左子树
        // 若左子树返回null，则返回当前的根节点root，即左子树的父节点
        return inorderSuccessor(root.left, p) || root;
    } else if (root.val < p.val) {
        // p在右子树
        return inorderSuccessor(root.right, p);
    } else {
        // 右子树空，没有后继节点
        if (!root.right) return null;
        // 找到右子树的最左侧节点
        let res = root.right;
        while (res.left) {
            res = res.left;
        }
        return res;
    }
};
