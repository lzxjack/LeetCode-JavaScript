const connect = root => {
    if (!root) return root;
    // 根节点入队
    const Q = [root];
    while (Q.length) {
        const size = Q.length;
        // 遍历这一层的所有节点
        for (let i = 0; i < size; i++) {
            // 队头出队
            const node = Q.shift();
            // 连接
            if (i < size - 1) {
                // 新的队头是node的右边元素
                node.next = Q[0];
            }
            // 队头左节点有值，放入队列
            node.left && Q.push(node.left);
            // 队头右节点有值，放入队列
            node.right && Q.push(node.right);
        }
    }
    return root;
};
