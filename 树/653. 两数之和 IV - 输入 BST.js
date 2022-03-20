const findTarget = (root, k) => {
  const set = new Set();

  const dfs = node => {
    // 递归出口
    if (!node) return false;
    // 找到对应的值，返回true
    if (set.has(k - node.val)) return true;
    // 没找到，将自己添加进去
    set.add(node.val);
    // 左右子树中一个找到即可
    return dfs(node.left) || dfs(node.right);
  };

  return dfs(root);
};
