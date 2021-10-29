const bstToGst = root => {
    let sum = 0;
    const myOrder = root => {
        if (!root) return;
        // 右
        myOrder(root.right);
        // 根
        sum += root.val;
        root.val = sum;
        // 左
        myOrder(root.left);
    };
    myOrder(root);
    return root;
};
