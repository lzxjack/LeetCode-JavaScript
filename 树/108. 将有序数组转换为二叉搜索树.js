const sortedArrayToBST = nums => {
    if (!nums.length) return null;
    // 去中间索引
    const mid = nums.length >> 1;
    // 构建二叉树，根节点为中间值，左子树为左侧值继续构建，右子树为右子树继续构建
    const root = new TreeNode(
        nums[mid],
        sortedArrayToBST(nums.slice(0, mid)),
        sortedArrayToBST(nums.slice(mid + 1))
    );
    return root;
};
