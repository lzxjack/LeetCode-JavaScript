const isValidBST = root => {
    const arr = [];
    const inOrder = root => {
        if (!root) return;
        inOrder(root.left); // 左
        arr.push(root.val); // 根
        inOrder(root.right); // 右
    };
    inOrder(root);
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        if (arr[i] <= arr[i - 1]) return false;
    }
    return true;
};
