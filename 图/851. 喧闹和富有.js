const loudAndRich = (richer, quiet) => {
    const n = quiet.length;
    // 构建关系图，key比value数组中的人都有钱
    const connect = new Map();
    // 每个人的入度
    const deg = new Array(n).fill(0);
    const res = new Array(n);
    for (const [a, b] of richer) {
        // a比b有钱
        if (connect.has(a)) {
            connect.get(a).push(b);
        } else {
            connect.set(a, [b]);
        }
        // b入度++
        deg[b]++;
    }
    // 搜集所有入度为0的人,即最有钱的人
    const queue = [];
    for (let i = 0; i < n; i++) {
        res[i] = i;
        if (!deg[i]) {
            queue.push(i);
        }
    }
    while (queue.length) {
        const item = queue.shift();
        if (connect.has(item)) {
            for (const x of connect.get(item)) {
                if (quiet[res[item]] < quiet[res[x]]) {
                    res[x] = res[item];
                }
                // 进行了一次比较，所以入度-1
                deg[x]--;
                if (!deg[x]) queue.push(x);
            }
        }
    }
    return res;
};
