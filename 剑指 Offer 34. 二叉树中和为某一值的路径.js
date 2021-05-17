// 套用回溯算法的思路
// 设定一个结果数组result来存储所有符合条件的路径
// 设定一个栈stack来存储当前路径中的节点
// 设定一个和sum来标识当前路径之和
// 从根结点开始深度优先遍历，每经过一个节点，将节点入栈
// 到达叶子节点，且当前路径之和等于给定目标值，则找到一个可行的解决方案，将其加入结果数组
// 遍历到二叉树的某个节点时有2个可能的选项，选择前往左子树或右子树
// 若存在左子树，继续向左子树递归
// 若存在右子树，继续向右子树递归
// 若上述条件均不满足，或已经遍历过，将当前节点出栈，向上回溯

const pathSumSolu = (node, target, stack, sum, res) => {
    // 将节点入栈
    stack.push(node.val);
    // 节点加入到sum中
    sum += node.val;
    // 到达了叶子节点，并且当前记录的sum正好满足条件
    if (!node.left && !node.right && sum === target) {
        // 将栈中的节点推入返回结构res中
        res.push(stack.slice(0));
    }
    // 如果存在左节点，继续遍历左子树
    if (node.left) {
        pathSumSolu(node.left, target, stack, sum, res);
    }
    // 如果存在右节点，继续遍历右子树
    if (node.right) {
        pathSumSolu(node.right, target, stack, sum, res);
    }
    // 如果不存在左右节点，表明已到达叶子节点，向上回溯。stack弹出一个节点
    stack.pop();
};

const pathSum = (root, target) => {
    // 存储结果的数组
    const res = [];
    if (root) {
        pathSumSolu(root, target, [], 0, res);
    }
    return res;
};
