const binaryTreePaths = root => {
    // 返回的数组
    const res = [];
    // 定义获得路径的函数
    const getPath = (root, path) => {
        // 递归终点：节点为空
        if (root) {
            // path加上当前节点的值
            path = path + root.val.toString();
            if (!root.left && !root.right) {
                // 当前节点送是叶子节点
                // 将路径放入到res
                res.push(path);
            } else {
                // 不是叶子节点，加上'->'，递归遍历
                path = path + '->';
                getPath(root.left, path);
                getPath(root.right, path);
            }
        }
    };
    // path一开始为空
    getPath(root, '');
    return res;
};
