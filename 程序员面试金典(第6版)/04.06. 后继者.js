const inorderSuccessor = (root, p) => {
    // pre:上一个节点
    // res:目标节点的后继者
    let [pre, res] = [null, null];
    const inOrder = root => {
        // res有值，就不必递归了
        if (!root || res) return;
        inOrder(root.left);
        // 上个节点pre等于指定节点p
        // 那么后继者就是当前节点root了
        if (pre === p) {
            res = root;
        }
        // 将pre设置为当前节点值
        pre = root;
        inOrder(root.right);
    };
    inOrder(root);
    return res;
};
