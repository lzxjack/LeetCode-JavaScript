const findTarget = (root, k) => {
    const set = new Set();
    const search = root => {
        // 如果找到节点空，找不到
        if (!root) return false;
        // set中有需要的值，直接返回true
        if (set.has(k - root.val)) return true;
        // 没有的话，登记一下
        set.add(root.val);
        // 左右子树继续找，任意一个找到即可
        return search(root.left) || search(root.right);
    };
    return search(root);
};
