const minimumDeletions = nums => {
    const len = nums.length;
    // 特殊情况
    if (len === 1) return 1;
    // 找到最大值，最小值，以及索引
    let [max, min] = [-Infinity, Infinity];
    let [maxIndex, minIndex] = [-1, -1];
    for (let i = 0; i < len; i++) {
        if (nums[i] > max) {
            max = nums[i];
            maxIndex = i;
        }
        if (nums[i] < min) {
            min = nums[i];
            minIndex = i;
        }
    }
    // 有3种操作方式
    let count1, count2, count3;
    // 判断两个索引的大小
    if (maxIndex < minIndex) {
        count1 = maxIndex + 1 + len - minIndex;
        count2 = minIndex + 1;
        count3 = len - maxIndex;
    } else {
        count1 = minIndex + 1 + len - maxIndex;
        count2 = maxIndex + 1;
        count3 = len - minIndex;
    }
    // 返回3种方式的最小值
    return Math.min(count1, count2, count3);
};
