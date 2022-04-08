const levelOrder = root => {
  if (!root) return [];
  const res = [];
  const queue = [root];

  while (queue.length) {
    let len = queue.length;
    const temp = [];
    while (len--) {
      const n = queue.shift();
      temp.push(n.val);
      n.children.forEach(node => queue.push(node));
    }
    res.push(temp);
  }

  return res;
};
