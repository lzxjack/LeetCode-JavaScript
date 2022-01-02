const lastRemaining = n => {
    // 剩余的个数
    let remain = n;
    // true表示从左到右
    let flag = true;
    // 第一个数
    let first = 1;
    // 步长
    let step = 1;
    while (remain > 1) {
        if (flag || remain & 1) {
            // 从左到右，或剩余数为奇数时，第一个数会被删除
            // 所以新的第一个数要加step
            first += step;
        }
        flag = !flag;
        step *= 2;
        remain = remain >> 1;
    }
    return first;
};
