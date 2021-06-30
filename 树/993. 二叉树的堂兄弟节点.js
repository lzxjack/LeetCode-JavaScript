const isCousins = (root, x, y) => {
    let [xParent, xDepth, xFound] = [null, null, false];
    let [yParent, yDepth, yFound] = [null, null, false];
    const dfs = (node, depth, parent) => {
        if (!node) return;

        if (node.val === x) {
            // 找到x
            [xParent, xDepth, xFound] = [parent, depth, true];
        } else if (node.val === y) {
            // 找到y
            [yParent, yDepth, yFound] = [parent, depth, true];
        }
        // 遍历左子树之前，检查是否都找到
        if (xFound && yFound) return;
        // 递归左子树，左子树的父节点为当前节点node
        dfs(node.left, depth + 1, node);
        // 遍历右子树之前，检查是否都找到
        if (xFound && yFound) return;
        // 递归右子树，右子树的父节点为当前节点node
        dfs(node.right, depth + 1, node);
    };
    // 传入根节点、深度0、父节点null
    dfs(root, 0, null);
    return xDepth === yDepth && xParent !== yParent;
};
