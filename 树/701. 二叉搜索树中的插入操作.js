const insertIntoBST = (root, val) => {
    // 若节点为空，创建新节点插入
    if (!root) return new TreeNode(val);
    if (root.val >= val) {
        // 当前节点大于等于要插入的节点，则插入左子树
        root.left = insertIntoBST(root.left, val);
    } else {
        // 当前节点小于要插入的节点，则插入右子树
        root.right = insertIntoBST(root.right, val);
    }
    // 返回已操作完成的根节点
    return root;
};
