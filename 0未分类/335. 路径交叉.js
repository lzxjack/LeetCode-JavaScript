const isSelfCrossing = distance => {
    const n = distance.length;
    for (let i = 3; i < n; i++) {
        // 第一类
        if (distance[i - 1] <= distance[i - 3] && distance[i] >= distance[i - 2]) {
            return true;
        }
        // 第二类
        if (
            i >= 4 &&
            distance[i - 1] === distance[i - 3] &&
            distance[i] >= distance[i - 2] - distance[i - 4]
        ) {
            return true;
        }
        // 第三类
        if (
            i >= 5 &&
            distance[i - 1] >= distance[i - 3] - distance[i - 5] &&
            distance[i - 1] <= distance[i - 3] &&
            distance[i - 2] > distance[i - 4] &&
            distance[i] >= distance[i - 2] - distance[i - 4]
        ) {
            return true;
        }
    }
    return false;
};
