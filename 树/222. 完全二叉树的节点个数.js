// 递归
// const countNodes = root => {
//     if (!root) return 0;
//     return countNodes(root.left) + countNodes(root.right) + 1;
// };

// 迭代
const countNodes = root => {
    if (!root) return [];
    // 根节点入队
    const q = [root];
    let count = 0;
    while (q.length) {
        // 当前层的数量
        let len = q.length;
        while (len--) {
            // 从队列中，将当前层的元素推入res的尾巴数组中
            const n = q.shift();
            count++;
            n.left && q.push(n.left);
            n.right && q.push(n.right);
        }
    }
    return count;
};
