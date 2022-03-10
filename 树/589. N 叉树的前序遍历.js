const preorder = root => {
  if (!root) return [];
  const res = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    res.push(node.val);
    let len = node.children.length;
    while (len) {
      stack.push(node.children[len - 1]);
      len--;
    }
  }

  return res;
};

// const preorder = root => {
//   const res = [];
//   const dfs = root => {
//     if (!root) return;
//     res.push(root.val);
//     root.children.forEach(item => {
//       dfs(item);
//     });
//   };

//   dfs(root);
//   return res;
// };
