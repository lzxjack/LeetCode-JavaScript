const isPossibleDivide = (hand, groupSize) => {
    // 数量不满足，直接返回false
    const len = hand.length;
    if (len % groupSize) return false;
    // 升序排序
    hand.sort((a, b) => a - b);
    // 统计数字出现次数
    const map = {};
    for (const num of hand) {
        map[num] = (map[num] || 0) + 1;
    }
    // 遍历起点
    for (const num of hand) {
        // 当前起点用完了，直接下一个
        if (!map[num]) continue;
        // 寻找是否有合适的顺子
        for (let i = 0; i < groupSize; i++) {
            if (!map[num + i]) {
                // 找不到下一个顺子，直接返回false
                return false;
            } else {
                // 当前牌被用了一次
                map[num + i]--;
            }
        }
    }
    return true;
};
