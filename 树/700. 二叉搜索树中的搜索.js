const searchBST = (root, val) => {
    while (root) {
        if (root.val === val) return root;
        root = root.val > val ? root.left : root.right;
    }
    return null;
};
