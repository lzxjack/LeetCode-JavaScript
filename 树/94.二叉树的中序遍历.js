// 给定一个二叉树的根节点 root ，返回它的 中序 遍历。

// 递归
// const inorderTraversal = root => {
//     const res = [];
//     const inOrder = root => {
//         if (!root) return;
//         inOrder(root.left);
//         res.push(root.val);
//         inOrder(root.right);
//     };
//     inOrder(root);
//     return res;
// };

// 非递归
const inorderTraversal = root => {
    if (!root) return [];
    const res = [];
    const stack = [];
    let p = root;
    while (stack.length || p) {
        while (p) {
            stack.push(p);
            p = p.left;
        }
        const n = stack.pop();
        res.push(n.val);
        p = n.right;
    }
    return res;
};
