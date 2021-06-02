// 给定一个二叉树的根节点 root ，返回它的 中序 遍历。

// 递归
// var inorderTraversal = function(root) {
//     const res = [];
//     const rec = (n) => {
//         if (!n) return;
//         rec(n.left);
//         res.push(n.val);
//         rec(n.right);
//     };
//     rec(root);
//     return res;
// };