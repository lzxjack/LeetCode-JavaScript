const findBottomLeftValue = root => {
    // 返回值
    let res = 0;
    // 根节点入队
    const q = [root];
    while (q.length) {
        // 当前层的数量
        let len = q.length;
        for (let i = 0; i < len; i++) {
            // 队头出队
            const n = q.shift();
            // 如果是当前层数第一个元素，则更新res
            if (i === 0) res = n.val;
            n.left && q.push(n.left);
            n.right && q.push(n.right);
        }
    }
    return res;
};
