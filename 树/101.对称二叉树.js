const isSymmetric = root => {
    if (!root) return true;

    // 判断两个树是否镜像
    const isMirror = (l, r) => {
        // 递归出口，两树都为空，true
        if (!l && !r) return true;
        // 左节点=右节点、两个树的子树分别对应镜像时，true
        if (l && r && l.val === r.val && isMirror(l.left, r.right) && isMirror(l.right, r.left)) {
            return true;
        }
        // 其他情况false
        return false;
    };
    return isMirror(root.left, root.right);
};

const isSymmetric = root => {
    if (!root) return true;

    // 根节点的左右节点入队
    const queue = [root.left, root.right];
    while (queue.length) {
        // 当前队列的长度
        const len = queue.length;
        // 每次对比两个节点，所以i=i+2
        for (let i = 0; i < len; i += 2) {
            // 两个节点出队
            const left = queue.shift();
            const right = queue.shift();
            // 有一个为空，另一个不为空，直接返回false
            if ((left && !right) || (!left && right)) return false;
            // 两节点都不为空
            if (left && right) {
                // 值不相等，返回false
                if (left.val !== right.val) return false;
                // 将两个节点的左右节点，按照对应关系入队
                queue.push(left.left, right.right);
                queue.push(left.right, right.left);
            }
        }
    }
    // 遍历结束返回true
    return true;
};
