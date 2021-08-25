const allPathsSourceTarget = graph => {
    // 终点
    const end = graph.length - 1;
    const res = [];
    // 深度优先遍历函数
    const dfs = (arr, path) => {
        // 遍历输入数组中的每个节点
        for (const node of arr) {
            if (node === end) {
                // 如果节点等于终点，则代表是一条完整路径
                // 放入res
                res.push([...path, node]);
            } else {
                // 节点不等于终点，继续遍历
                // 当前路径加上当前节点作为新的路径
                // 从当前节点出发，继续遍历寻找
                dfs(graph[node], [...path, node]);
            }
        }
    };
    // 从graph[0]开始寻找，路径初试从0开始
    dfs(graph[0], [0]);
    return res;
};
