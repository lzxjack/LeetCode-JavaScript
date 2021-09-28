const pathSum = (root, targetSum) => {
    // 深度优先遍历
    // 参数：(当前节点,当前节点前缀和)
    const dfs = (root, sum) => {
        if (!root) return 0;
        map.set(sum, (map.get(sum) || 0) + 1);
        const newSum = sum + root.val;
        // 寻找有无(newSum - targetSum)
        res += map.get(newSum - targetSum) || 0;
        // 向下遍历
        dfs(root.left, newSum);
        dfs(root.right, newSum);
        // 避免相同节点值被重复计算，确保算出的sum是从上到下的一条路径
        map.set(sum, map.get(sum) - 1);
    };

    // map中，key存的是前缀和，value存的是前缀和的数目
    const map = new Map();
    let res = 0;
    dfs(root, 0);
    return res;
};
