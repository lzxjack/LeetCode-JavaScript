// 递归后序遍历：左-右-根
// const postorderTraversal = root => {
//     const res = [];
//     const postOrder = root => {
//         if (!root) return;
//         postOrder(root.left);
//         postOrder(root.right);
//         res.push(root.val);
//     };
//     postOrder(root);
//     return res;
// };

// 后序遍历（非递归）
const postorderTraversal = root => {
    if (!root) return [];
    const arr = [root];
    const res = [];
    while (arr.length) {
        const n = arr.pop();
        res.unshift(n.val);
        n.left && arr.push(n.left);
        n.right && arr.push(n.right);
    }
    return res;
};
