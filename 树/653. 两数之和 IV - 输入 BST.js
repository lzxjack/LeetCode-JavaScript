// 函数传入一个set
const findTarget = (node, k, set = new Set()) => {
    // 递归到尽头，返回false
    if (!node) return false;
    // 如果set里有相应的数，返回true
    if (set.has(k - node.val)) return true;
    // 没有，就登记一下
    set.add(node.val);
    // 递归遍历左右子树
    return findTarget(node.left, k, set) || findTarget(node.right, k, set);
};
