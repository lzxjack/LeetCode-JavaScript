const generateMatrix = n => {
    // 创建二维数组
    const res = new Array(n).fill(0).map(x => new Array(n));
    // 填充一圈为一个循环，loop是循环的次数
    let loop = n >> 1,
        // 当前第几次循环
        i = 0,
        // 要填充的数字
        num = 1;
    // 每次循环的起点位置
    let [startX, startY] = [0, 0];

    while (++i <= loop) {
        // 定义行列初始位置
        let [row, col] = [startX, startY];
        // 上：行不动，列增加
        while (col < n - i) res[row][col++] = num++;
        // 右：列不动，行增加
        while (row < n - i) res[row++][col] = num++;
        // 下：行不动，列减少
        while (col > startY) res[row][col--] = num++;
        // 左：列不动，行减少
        while (row > startX) res[row--][col] = num++;
        // 循环一次后，更新循环的起点位置
        startX++;
        startY++;
    }
    // 如果n是奇数，则中间的格子需要单独填充
    if (n & 1) res[startX][startY] = num;
    return res;
};
