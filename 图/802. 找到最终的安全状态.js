const eventualSafeNodes = graph => {
    const dfs = (graph, i, color) => {
        // 如果当前位置的标记，不是0，判断是否是安全的
        if (color[i] > 0) return color[i] === 2;
        // 先标记为1
        color[i] = 1;
        // 遍历当前位置的能到达的每个位置
        for (const item of graph[i]) {
            // 如果不是安全的，直接返回false
            if (!dfs(graph, item, color)) return false;
        }
        // 当前位置能到达的所有位置都是安全的，当前位置也是安全的，标记为2
        color[i] = 2;
        return true;
    };

    const len = graph.length;
    // 初始化标记，全初始化为0
    const color = new Array(len).fill(0);
    const res = [];
    for (let i = 0; i < len; i++) {
        // 依次判断是否安全
        if (dfs(graph, i, color)) res.push(i);
    }
    return res;
};
