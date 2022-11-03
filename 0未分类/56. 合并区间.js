const merge = intervals => {
    const res = [];
    // 按照区间的左边界排序
    intervals.sort((a, b) => a[0] - b[0]);
    // 将第一个区间加入答案
    res.push(intervals[0]);
    const len = intervals.length;
    // 从i=1遍历
    for (let i = 1; i < len; i++) {
        if (intervals[i][0] > res[res.length - 1][1]) {
            // 若当前区间的左边界大于res最后一个区间的右边界，则他们肯定不会重合
            res.push(intervals[i]);
        } else {
            // 否则，他们会重合，更新res最后一个区间的右边界
            res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1]);
        }
    }
    return res;
};
