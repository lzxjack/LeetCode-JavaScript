const minCost = (startPos, homePos, rowCosts, colCosts) => {
    let res = 0;
    // 移动行，需要的代价
    if (startPos[0] < homePos[0]) {
        // 终点大
        for (let i = startPos[0] + 1; i <= homePos[0]; i++) {
            res += rowCosts[i];
        }
    } else {
        // 起点大
        for (let i = startPos[0] - 1; i >= homePos[0]; i--) {
            res += rowCosts[i];
        }
    }
    // 移动列，需要的代价
    if (startPos[1] < homePos[1]) {
        // 终点大
        for (let i = startPos[1] + 1; i <= homePos[1]; i++) {
            res += colCosts[i];
        }
    } else {
        // 起点大
        for (let i = startPos[1] - 1; i >= homePos[1]; i--) {
            res += colCosts[i];
        }
    }
    return res;
};
