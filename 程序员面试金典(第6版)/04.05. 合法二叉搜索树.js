const isValidBST = root => {
    let preVal = -Infinity;
    const inOrder = root => {
        if (!root) return true;
        const L = inOrder(root.left);
        // 当前值小于等于上一个值，不递增，肯定不是二叉搜索树
        if (root.val <= preVal) return false;
        preVal = root.val;
        const R = inOrder(root.right);
        // 左右子树都要是二叉搜索树
        return L && R;
    };
    return inOrder(root);
};
