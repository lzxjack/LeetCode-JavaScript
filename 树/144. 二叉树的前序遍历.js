// 递归版本：根左右
// const preorderTraversal = root => {
//     const res = [];
//     const preOrder = root => {
//         if (!root) return;
//         res.push(root.val);
//         preOrder(root.left);
//         preOrder(root.right);
//     };
//     preOrder(root);
//     return res;
// };

// 非递归版本
// 递归先序遍历（非递归）
const preorderTraversal = root => {
    if (!root) return [];
    const res = [];
    const stack = [root];
    while (stack.length) {
        // n是栈顶元素，栈顶元素出栈
        const n = stack.pop();
        // 访问栈顶元素
        res.push(n.val);
        // 栈顶左节点入栈
        n.right && stack.push(n.right);
        // 栈顶右节点入栈
        n.left && stack.push(n.left);
    }
    return res;
};
