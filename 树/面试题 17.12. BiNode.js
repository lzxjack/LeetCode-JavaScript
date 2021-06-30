const convertBiNode = root => {
    // 新建一个节点，作为初始的"上一个节点"
    let preNode = new TreeNode(0);
    const res = preNode;
    // 中序遍历的函数：左根右
    const inOrder = root => {
        if (!root) return null;
        inOrder(root.left);
        // 当前根节点的左节点赋为null
        root.left = null;
        // 上一个节点的右节点指向当前节点
        preNode.right = root;
        // 操作完成，更新上一个节点，以便下次操作
        preNode = root;
        inOrder(root.right);
    };
    inOrder(root);
    return res.right;
};
