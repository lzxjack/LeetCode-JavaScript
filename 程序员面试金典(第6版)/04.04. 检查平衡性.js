const isBalanced = root => {
    let isBalance = true;
    const getH = root => {
        if (!isBalance) return;
        if (!root) return 0;
        const left = getH(root.left);
        const right = getH(root.right);
        if (Math.abs(left - right) > 1) isBalance = false;
        return Math.max(left, right) + 1;
    };
    getH(root);
    return isBalance;
};
