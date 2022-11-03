const findMinMoves = machines => {
    // 计算总数和
    const total = eval(machines.join('+'));
    const n = machines.length;
    if (total % n) return -1;

    // 每台洗衣机应该剩余的衣服数
    const avg = Math.floor(total / n);

    let [res, sum] = [0, 0];
    for (let num of machines) {
        num -= avg;
        sum += num;
        // 若其中有一台洗衣机需要同时向两边给，要加上num
        res = Math.max(res, Math.max(Math.abs(sum), num));
    }
    return res;
};
