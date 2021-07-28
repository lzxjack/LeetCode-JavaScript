const distanceK = (root, target, k) => {
    // 存放每个节点的父节点的map
    const parents = new Map();
    const res = [];

    const findParents = node => {
        if (node.left) {
            // key：左子节点值
            // value：当前节点
            parents.set(node.left.val, node);
            findParents(node.left);
        }
        if (node.right) {
            // key：左子节点值
            // value：当前节点
            parents.set(node.right.val, node);
            findParents(node.right);
        }
    };
    // 从root出发，深度优先遍历，找到所有节点的父节点
    findParents(root);

    // node：当前节点
    // from：当前节点的来源（父节点或子节点）
    // depth：深度
    // k：题目中的k
    const dfs = (node, from, depth, k) => {
        if (!node) return;
        // 找到了符合条件的节点，放入res
        if (depth === k) {
            res.push(node.val);
            return;
        }
        // 避免向左下递归时，又向上递归
        node.left !== from && dfs(node.left, node, depth + 1, k);
        // 避免向右下递归时，又向上递归
        node.right !== from && dfs(node.right, node, depth + 1, k);
        // 避免向上递归时，又向下递归
        parents.get(node.val) !== from && dfs(parents.get(node.val), node, depth + 1, k);
    };
    // 从target节点处开始递归
    // 三个方向：左子节点、右子节点、父节点
    dfs(target, null, 0, k);

    return res;
};
