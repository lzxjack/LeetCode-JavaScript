// 1. 定义isSameTree()用来判断两个树是否相同
// 2. 首先判断s和t是否相同，相同返回true
// 3. 不相同就递归判断s的左右子树是否和t相同

// 判断两个树是否相同
const isSameTree = (p, q) => {
    if (!p && !q) return true;
    if (p && q && p.val === q.val && isSameTree(q.left, p.left) && isSameTree(q.right, p.right)) {
        return true;
    }
    return false;
};

const isSubtree = (s, t) => {
    // 递归出口
    if (!s) return false;
    // 若两个树相同，肯定是true
    if (isSameTree(s, t)) return true;
    // 不相同，就递归判断s的左右子树
    return isSubtree(s.left, t) || isSubtree(s.right, t);
};
