// 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

// 说明: 叶子节点是指没有子节点的节点。

// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 。

// var maxDepth = function(root) {
//     // 定义深度的变量
//     let res = 0;
//     // n为二叉树，level层级
//     const dfs = (n, level) => {
//         if (!n) { return; }
//         // 子节点才刷新层级
//         if (!n.left && !n.right) {
//             res = Math.max(res, level);
//         }
//         dfs(n.left, level + 1);
//         dfs(n.right, level + 1);
//     }
//     dfs(root, 1);
//     return res;
// };

const maxDepth = function (root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
