const increasingBST = root => {
    const res = new TreeNode(-1);
    let p = res;
    const inOrder = root => {
        if (!root) return;
        inOrder(root.left);
        p.right = root;
        root.left = null;
        p = root;
        inOrder(root.right);
    };
    inOrder(root);
    return res.right;
};
