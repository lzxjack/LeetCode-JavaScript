const serialize = root => {
  // 先序遍历的结果
  const preOrderRes = [];

  const preOrder = root => {
    if (!root) return;
    preOrderRes.push(root.val);
    preOrder(root.left);
    preOrder(root.right);
  };

  preOrder(root);

  // 因为是二叉搜索树，排序后就是中序遍历的结果
  const inOrderRes = [...preOrderRes].sort((a, b) => a - b);

  // 返回先序遍历、中序遍历
  return `${preOrderRes}-${inOrderRes}`;
};

// 从先序遍历、中序遍历中，返回二叉树
const deserialize = str => {
  const [preStr, inStr] = str.split('-');
  const [preOrderRes, inOrderRes] = [preStr.split(','), inStr.split(',')];

  if (!preOrderRes[0]) return null;

  const rootVal = preOrderRes[0];
  const index = inOrderRes.indexOf(rootVal);

  const preLeft = preOrderRes.slice(1, index + 1);
  const preRight = preOrderRes.slice(index + 1);

  const inLeft = inOrderRes.slice(0, index);
  const inRight = inOrderRes.slice(index + 1);

  const node = new TreeNode(rootVal);

  node.left = deserialize(`${preLeft}-${inLeft}`);
  node.right = deserialize(`${preRight}-${inRight}`);

  return node;
};
