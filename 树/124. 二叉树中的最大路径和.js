const maxPathSum = root => {
  let res = -Infinity;

  const dfs = root => {
    // 递归出口
    if (!root) return 0;

    // 左右子树返回的路径和，若小于0则置0，表示舍去这条路径
    const left = Math.max(0, dfs(root.left));
    const right = Math.max(0, dfs(root.right));

    // 更新res
    res = Math.max(res, root.val + left + right);

    // 返回上一级递归，只能选左右子树中较大的那一条路径
    return Math.max(left, right) + root.val;
  };

  dfs(root);
  return res;
};
