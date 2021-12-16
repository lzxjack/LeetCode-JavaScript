const findWhetherExistsPath = (n, graph, start, target) => {
    // 将连接关系放在数组中
    const set = new Array(n).fill(0).map(() => new Set());
    // 数组index对应起点
    // 每个数组元素是set，set里面的值是index指向的终点
    for (const [start, end] of graph) {
        set[start].add(end);
    }
    const visited = new Set();
    const dfs = start => {
        // 到达终点，返回true
        if (start === target) return true;
        // 如果当前起点已经访问过，还没有true，说明成环了，返回false
        if (visited.has(start)) return false;
        // 标记访问
        visited.add(start);
        // 遍历当前点的每个终点
        for (const newStart of set[start]) {
            if (dfs(newStart)) return true;
        }
        return false;
    };

    return dfs(start);
};
