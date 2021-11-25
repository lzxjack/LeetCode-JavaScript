const reconstructQueue = people => {
    // 将队列按照身高从高到底排序
    // 相同身高的，k小的在前面
    people.sort((a, b) => {
        if (a[0] !== b[0]) return b[0] - a[0];
        return a[1] - b[1];
    });
    // 构造新数组
    const res = [];
    const len = people.length;
    for (let i = 0; i < len; i++) {
        // 放置的时候，前面放置过的人，身高肯定比自己高
        // 所以就放在自己对应的k位置即可
        res.splice(people[i][1], 0, people[i]);
    }
    return res;
};
