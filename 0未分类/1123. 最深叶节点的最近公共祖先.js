const f = root => {
  if (!root) {
    return [0, root];
  }

  let [d1, lca1] = f(root.left);
  let [d2, lca2] = f(root.right);

  if (d1 > d2) {
    return [d1 + 1, lca1];
  }
  if (d1 < d2) {
    return [d2 + 1, lca2];
  }
  return [d1 + 1, root];
};

const lcaDeepestLeaves = root => {
  return f(root)[1];
};
