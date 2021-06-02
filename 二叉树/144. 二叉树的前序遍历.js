// 递归版本：根左右
// const preorderTraversal = (root, res = []) => {
//     if (root) {
//         res.push(root.val);
//         preorderTraversal(root.left, res);
//         preorderTraversal(root.right, res);
//     }
//     return res;
// };

// 非递归版本
// 递归先序遍历（非递归）
const preorderTraversal = root => {
    if (!root) return [];

    const res = [];
    const stack = [root];
    // 重复，直至栈为空
    while (stack.length) {
        // n是栈顶元素，栈顶元素出栈
        const n = stack.pop();
        // console.log(n.val);
        // 访问栈顶元素
        res.push(n.val);
        // 栈顶左节点入栈
        if (n.right) stack.push(n.right);
        // 栈顶右节点入栈
        if (n.left) stack.push(n.left);
    }
    return res;
};
