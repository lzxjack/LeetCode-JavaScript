const findSecondMinimumValue = root => {
    // res初始化为-1
    let res = -1;
    // 整棵树的根节点是最小值
    const min = root.val;

    // 深度优先遍历
    const dfs = node => {
        if (!node) return;
        // 当前节点值大于等于res，但res不是-1
        // 说明res已经被更新过了，当前节点不是第二小的值
        // 当前树就不用遍历了，因为下面的节点越来越大
        if (node.val >= res && res !== -1) return;
        // 当前节点值大于min，更新res
        if (node.val > min) res = node.val;
        dfs(node.left);
        dfs(node.right);
    };
    dfs(root);
    return res;
};
