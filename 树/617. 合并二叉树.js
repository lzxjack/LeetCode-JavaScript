const mergeTrees = (root1, root2) => {
    // 递归出口：当前节点为空，返回另一个节点
    if (!root1) return root2;
    if (!root2) return root1;

    // 当前递归要操作的部分：将两个节点的值合并
    root1.val = root1.val + root2.val;

    // 进行递归
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);

    // 当前递归返回上一级的内容：root1，因为值都已合并到root1
    return root1;
};
