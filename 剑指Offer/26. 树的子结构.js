// 该递归函数是用来判断A当前节点和B是否相同
const dfs = (A, B) => {
    // 递归出口
    if (!B) return true;
    // A空，B不为空，false
    if (!A) return false;
    return A.val === B.val && dfs(A.left, B.left) && dfs(A.right, B.right);
};

const isSubStructure = (A, B) => {
    // 递归出口，A空或B空，false
    if (!A || !B) return false;
    // 递归判断A当前节点、A左子树、A右子树任意一个与B相同，就返回true
    return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};
