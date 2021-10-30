const deleteNode = (root, key) => {
    if (!root) return null;
    if (root.val > key) {
        // 当前值太大，递归左子树
        root.left = deleteNode(root.left, key);
    } else if (root.val < key) {
        // 当前值太小，递归右子树
        root.right = deleteNode(root.right, key);
    } else {
        // 左子树为空，返回右子树
        if (!root.left) return root.right;
        // 右子树为空，返回左子树
        if (!root.right) return root.left;
        // 定义指向右子树的指针
        let cur = root.right;
        // 拿到右子树的最左侧节点
        while (cur.left) cur = cur.left;
        // 将要删除节点的左子树移到右子树的最左边
        cur.left = root.left;
        // 返回右子树
        return root.right;
    }
    return root;
};
