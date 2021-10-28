const findTheWinner = (n, k) => {
    // 生成n名小伙伴
    const friends = [];
    for (let i = 1; i <= n; i++) {
        friends.push(i);
    }
    // index代表要淘汰的小伙伴的索引
    // 第一轮淘汰索引为k-1的小伙伴
    let index = k - 1;
    // 若小伙伴人数大于1，继续游戏
    while (friends.length > 1) {
        // 淘汰索引为index的小伙伴
        friends.splice(index, 1);
        // 重新数k个小伙伴
        index = index + k - 1;
        // 若index越界，则从首个小伙伴循环
        while (index > friends.length - 1) index = index - friends.length;
    }
    // 最后游戏只剩下1人，胜利者！
    return friends[0];
};

console.log(findTheWinner(6, 5));
