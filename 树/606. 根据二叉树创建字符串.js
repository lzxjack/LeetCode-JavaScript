const tree2str = root => {
    // 递归出口
    if (!root) return '';
    // 如果左右子树都为空，则只返回当前数的值
    if (!root.left && !root.right) return `${root.val}`;
    // 只有左子树为空，返回 3()(2) 的形式
    if (!root.left) return `${root.val}()(${tree2str(root.right)})`;
    // 只有右子树为空，返回 3(2)的形式
    if (!root.right) return `${root.val}(${tree2str(root.left)})`;
    // 左右子树都不为空，返回 3(2)(4) 的形式
    return `${root.val}(${tree2str(root.left)})(${tree2str(root.right)})`;
};
