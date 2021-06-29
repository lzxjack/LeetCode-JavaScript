const sortedArrayToBST = nums => {
    // 递归出口
    if (nums.length === 0) return null;

    // 取中间值，并以中间值为节点创建树
    const mid = nums.length >> 1;
    const root = new TreeNode(nums[mid]);

    // 左子树为中间值的左半边
    root.left = sortedArrayToBST(nums.slice(0, mid));
    // 右子树为中间值的右半边
    root.right = sortedArrayToBST(nums.slice(mid + 1));

    // 创建好的树返回上一级
    return root;
};
