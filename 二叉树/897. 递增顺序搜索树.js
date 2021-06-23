const increasingBST = root => {
    const dummy = new TreeNode();
    let current = dummy;
    const inorder = node => {
        if (!node) return;

        inorder(node.left);

        // 在中序遍历的过程中修改节点指向
        current.right = node;
        node.left = null;
        // 因为改变了位置，需要调整指向
        current = node;

        inorder(node.right);
    };
    inorder(root);
    return dummy.right;
};
