const findRelativeRanks = score => {
    const newScore = [...score];
    // 拷贝一份，并降序排序
    newScore.sort((a, b) => b - a);
    const map = new Map();
    const len = newScore.length;
    // 建立分数与名次的对应关系
    for (let i = 0; i < len; i++) {
        if (i === 0) {
            map.set(newScore[i], 'Gold Medal');
        } else if (i === 1) {
            map.set(newScore[i], 'Silver Medal');
        } else if (i === 2) {
            map.set(newScore[i], 'Bronze Medal');
        } else {
            map.set(newScore[i], `${i + 1}`);
        }
    }
    const res = [];
    // 遍历原数组，得到相应名次
    for (let i = 0; i < len; i++) {
        res.push(map.get(score[i]));
    }
    return res;
};
