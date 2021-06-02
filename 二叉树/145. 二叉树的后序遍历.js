// 递归后序遍历：左-右-根
const postorderTraversal = (root, res = []) => {
    if (root) {
        postorderTraversal(root.left, res); // 左
        postorderTraversal(root.right, res); // 右
        res.push(root.val); // 根
    }
    return res;
};

// 后序遍历（非递归）
