const diameterOfBinaryTree = root => {
    const maxDepth = root => {
        if (!root) return 0;
        let left = maxDepth(root.left);
        let right = maxDepth(root.right);
        res = Math.max(res, left + right);
        return Math.max(left, right) + 1;
    };

    let res = 0;
    maxDepth(root);
    return res;
};
