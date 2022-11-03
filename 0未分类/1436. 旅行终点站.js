const destCity = paths => {
    const set = new Set();
    const len = paths.length;
    for (let i = 0; i < len; i++) {
        // 将所有起点放入集合
        set.add(paths[i][0]);
    }
    for (let i = 0; i < len; i++) {
        // 遍历所有终点，不在集合中的就是终点站
        if (!set.has(paths[i][1])) return paths[i][1];
    }
};
