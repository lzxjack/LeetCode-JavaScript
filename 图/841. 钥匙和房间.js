const canVisitAllRooms = rooms => {
    // 创建已访问的集合
    // visited中存储的是房间号
    const visited = new Set();
    const dfs = key => {
        // 访问了当前房间，加入到访问过的集合中
        visited.add(key);
        // 遍历房间中有的钥匙
        rooms[key].forEach(otherKey => {
            // 若钥匙对应的房间没有访问过，继续访问
            if (!visited.has(otherKey)) {
                dfs(otherKey);
            }
        });
    };
    // 进入0号房间
    dfs(0);
    // 判断访问过的房间与房间总数的数量
    return visited.size === rooms.length;
};
