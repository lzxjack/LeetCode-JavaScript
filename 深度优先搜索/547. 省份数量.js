const findCircleNum = isConnected => {
    // 行、列
    const [m, n] = [isConnected.length, isConnected[0].length];
    let res = 0;
    const visited = new Array(m).fill(0);
    // 深度优先遍历
    const dfs = i => {
        // 标记访问
        visited[i] = 1;
        for (let j = 0; j < n; j++) {
            // 查找与i相连，且没有访问过的，继续dfs
            if (isConnected[i][j] && !visited[j]) dfs(j);
        }
    };
    for (let i = 0; i < m; i++) {
        if (!visited[i]) {
            // 遇到没有访问过的，访问到底
            // 省份+1
            dfs(i);
            res++;
        }
    }
    return res;
};
