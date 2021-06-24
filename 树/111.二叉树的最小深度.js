// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明：叶子节点是指没有子节点的节点。

// var minDepth = function(root) {
//     if (!root) { return 0; }
//     const q = [
//         [root, 1]
//     ];
//     while (q.length) {
//         const [n, l] = q.shift();
//         if (!n.left && !n.right) {
//             return l;
//         }
//         if (n.left) q.push([n.left, l + 1]);
//         if (n.right) q.push([n.right, l + 1]);
//     }
// };

const minDepth = root => {
    // 终止条件：树空
    if (!root) return 0;
    // 左子树为空，返回右子树最小深度+1
    if (!root.left) return minDepth(root.right) + 1;
    // 右子树为空，返回左子树最小深度+1
    if (!root.right) return minDepth(root.left) + 1;
    // 返回当前树的最小深度
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
