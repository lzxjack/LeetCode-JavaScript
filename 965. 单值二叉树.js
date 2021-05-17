const isUnivalTree = root => {
    // 定义一个递归函数，判断当前节点是否和给定值相等
    const check = (node, val) => {
        // 递归出口：节点空，返回true
        if (!node) return true;
        // 不相等返回false
        if (node.val !== val) return false;
        // 返回上一级的内容：左子树和右子树是否都相等
        return check(node.left, val) && check(node.right, val);
    };
    // 将根节点放入函数，根节点的值作为给定值
    return check(root, root.val);
};
