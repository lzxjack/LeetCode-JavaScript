const isBalanced = root => {
    // 先初始化平衡flag为true
    let isBalance = true;
    // 获得树高度的函数
    const getH = root => {
        // 如果已经不平衡了，就不要再计算高度了
        if (!isBalance) return;
        if (!root) return 0;
        // 左子树高度
        const left = getH(root.left);
        // 右子树高度
        const right = getH(root.right);
        // 如果左右子树高度绝对值差大于1，则不平衡
        if (Math.abs(left - right) > 1) isBalance = false;
        // 树的高度=左右子树高度最大值+1
        return Math.max(left, right) + 1;
    };
    getH(root);
    return isBalance;
};
