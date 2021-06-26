const closestValue = (root, target) => {
    // 定义当前节点值val、最小差值时的节点值closest
    let val,
        closest = root.val;
    while (root !== null) {
        // 更新当前值
        val = root.val;
        // 如果当前差值比之前的最小差值还要小，更新closest
        closest = Math.abs(val - target) < Math.abs(closest - target) ? val : closest;
        // target小于当前值，遍历左子树，否则遍历右子树
        root = target < val ? root.left : root.right;
    }
    return closest;
};
