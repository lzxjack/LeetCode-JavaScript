// 迭代
const postorder = root => {
  if (!root) return [];
  const res = [];
  // 根节点入栈
  const stack = [root];
  // 栈还有值的时候
  while (stack.length) {
    // 栈顶元素出栈
    const n = stack.pop();
    // 如果栈顶元素有子树，子树依次入栈
    stack.push(...n.children);
    // 将栈顶元素推入res队列
    res.unshift(n.val);
  }
  return res;
};

// 递归
// const postorder = root => {
//   if (!root) return [];
//   const res = [];

//   const post = root => {
//     if (!root) return;
//     root.children.forEach(node => post(node));
//     res.push(root.val);
//   };

//   post(root);
//   return res;
// };
