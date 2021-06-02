function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const sortedArrayToBST = function (nums) {
    if (!nums.length) return null;
    const root = new TreeNode(null);
    // 根节点的左边
    if (nums.length > 1) root.left = sortedArrayToBST(nums.splice(0, nums.length / 2));
    // 根节点
    root.val = nums[0];
    // 根节点的右边
    if (nums.length > 1) root.right = sortedArrayToBST(nums.splice(1));
    return root;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
