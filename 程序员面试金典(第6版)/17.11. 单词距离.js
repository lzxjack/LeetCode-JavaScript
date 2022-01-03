const findClosest = (words, word1, word2) => {
    // 存放两个单词的索引
    const index1 = [];
    const index2 = [];
    const len = words.length;
    for (let i = 0; i < len; i++) {
        if (words[i] === word1) {
            index1.push(i);
        }
        if (words[i] === word2) {
            index2.push(i);
        }
    }
    // 双指针遍历
    let min = Infinity;
    let [i, j] = [0, 0];
    while (i < index1.length && j < index2.length) {
        // 更新最小值
        min = Math.min(min, Math.abs(index1[i] - index2[j]));
        // 若最小值为0，则直接返回
        if (min === 0) return min;
        if (index1[i] > index2[j]) {
            j++;
        } else {
            i++;
        }
    }
    return min;
};
