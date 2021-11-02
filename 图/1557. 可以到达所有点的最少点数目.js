const findSmallestSetOfVertices = (n, edges) => {
    // 初始化入度是否为0的数组
    const flag = new Array(n).fill(true);
    for (const [from, to] of edges) {
        // 遍历edges数组中的每个to
        // 到达了to，说明to节点的入度肯定不为0
        flag[to] = false;
    }
    const res = [];
    // 寻找入度为0，即flag[i]为true的节点
    for (let i = 0; i < n; i++) {
        if (flag[i]) res.push(i);
    }
    return res;
};
