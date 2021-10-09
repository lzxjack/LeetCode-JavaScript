var SummaryRanges = function () {
    this.nums = [];
};

SummaryRanges.prototype.addNum = function (val) {
    // 如果nums中重复的数，则不添加
    if (this.nums.includes(val)) return;
    // 添加并升序排序
    this.nums.push(val);
    this.nums.sort((a, b) => a - b);
};

SummaryRanges.prototype.getIntervals = function () {
    const len = this.nums.length;
    // 定义要返回的区间数组
    const area = [];
    if (!len) return area;
    // 遍历nums
    for (let i = 0; i < len; i++) {
        // 当前数
        const curNum = this.nums[i];
        if (!area.length) {
            // 若area为空，则直接放入一个单个数区间
            area.push([curNum, curNum]);
        } else {
            // 最后一个区间
            const lastArea = area[area.length - 1];
            if (lastArea[1] + 1 === curNum) {
                // 若最后一个区间的右边界比当前数小1
                // 则更新这个右边界
                lastArea[1]++;
            } else {
                // 否则，单独放入一个单个数区间
                area.push([curNum, curNum]);
            }
        }
    }
    return area;
};
