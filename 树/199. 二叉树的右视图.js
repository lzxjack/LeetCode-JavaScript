const rightSideView = root => {
    if (!root) return [];
    // 根节点入队
    const q = [root];
    // 返回值
    const res = [];
    while (q.length) {
        // 当前层的数量
        let len = q.length;
        while (len--) {
            // 从队列中，将当前层的元素推入res的尾巴数组中
            const n = q.shift();
            // 只放入最右边的数
            if (!len) res.push(n.val);
            n.left && q.push(n.left);
            n.right && q.push(n.right);
        }
    }
    return res;
};
