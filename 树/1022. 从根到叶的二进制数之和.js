const sumRootToLeaf = root => {
  let res = 0;

  const search = (root, path) => {
    if (!root) return;

    // 更新路径
    path = `${path}${root.val}`;

    // 到达根节点
    if (!root.left && !root.right) {
      // 转化为十进制，累加
      res += parseInt(path, 2);
      return;
    }

    // 没到达根节点，左右子树继续遍历
    search(root.left, path);
    search(root.right, path);
  };

  search(root, ``);

  return res;
};
