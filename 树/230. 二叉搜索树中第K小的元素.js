// const kthSmallest = (root, k) => {
//     const res = [];
//     const stack = [];
//     let p = root;
//     while (stack.length || p) {
//         while (p) {
//             stack.push(p);
//             p = p.left;
//         }
//         const node = stack.pop();
//         res.push(node.val);
//         p = node.right;
//     }
//     return res[k - 1];
// };

const kthSmallest = (root, k) => {
    const res = [];
    const inOrder = root => {
        if (!root) return;
        // 左
        inOrder(root.left);
        // 根
        res.push(root.val);
        // 右
        inOrder(root.right);
    };
    inOrder(root);
    return res[k - 1];
};
