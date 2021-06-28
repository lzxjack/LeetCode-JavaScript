const getMinimumDifference = root => {
    // 定义res为无穷大
    // 定义遍历时上一个数pre，初始为-1
    let [res, pre] = [Infinity, -1];
    // 中序遍历
    const inorder = root => {
        if (!root) return;
        inorder(root.left);
        if (pre === -1) {
            // 如果是第一个数，只赋值
            pre = root.val;
        } else {
            // 不是第一个数，更新res和pre
            res = res < root.val - pre ? res : root.val - pre;
            pre = root.val;
        }
        inorder(root.right);
    };
    inorder(root);
    return res;
};
