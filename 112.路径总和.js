// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。

// 叶子节点 是指没有子节点的节点。

var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    let res = false;
    const dfs = (n, s) => {
        // console.log(n.val,s);
        if (!n.left && !n.right && s === targetSum) {
            res = true;
            return;
        }
        if (n.left) dfs(n.left, s + n.left.val);
        if (n.right) dfs(n.right, s + n.right.val);
        return false;
    };
    dfs(root, root.val);
    return res;
};