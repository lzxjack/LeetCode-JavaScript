const eraseOverlapIntervals = intervals => {
    // 按照区间的起点排序
    intervals.sort((a, b) => a[0] - b[0]);
    // 初始化第一个区间的终点为末端
    let end = intervals[0][1];
    let count = 0;
    const len = intervals.length;
    // 从第二个区间开始遍历
    for (let i = 1; i < len; i++) {
        if (intervals[i][0] < end) {
            // 若当前区间的起点小于end，肯定重叠了，要删除一个区间，所以count++
            count++;
            // 更新end，要使最后的答案最小，则要保留小的
            end = Math.min(end, intervals[i][1]);
        } else {
            // 没有重叠，更新end
            end = intervals[i][1];
        }
    }
    return count;
};
