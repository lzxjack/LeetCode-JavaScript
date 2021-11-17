const findTilt = function (root) {
    // 总坡度
    let res = 0;
    // 计算某个节点总和的函数：递归
    const sum = node => {
        // 递归终止条件：节点为空
        // 如果空节点，节点和为0
        if (!node) return 0;

        // 当前递归要做的事：求出当前树的坡度（左子树节点和+右子树节点和）
        // 计算节点的左子树节点和
        const left = sum(node.left);
        // 计算节点的右子树节点和
        const right = sum(node.right);
        // 定义当前节点的坡度
        const slope = Math.abs(left - right);
        // 加到总坡度上
        res += slope;

        // 返回当前树的节点总和
        return node.val + left + right;
    };
    sum(root);
    return res;
};
