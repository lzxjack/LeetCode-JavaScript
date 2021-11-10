const findPoisonedDuration = (timeSeries, duration) => {
    let res = 0;
    const len = timeSeries.length;
    // 从i=1开始
    for (let i = 1; i < len; i++) {
        if (timeSeries[i] - timeSeries[i - 1] <= duration) {
            // 若当前与前一个间隔小于等于duration，中毒时间多间隔时间
            res += timeSeries[i] - timeSeries[i - 1];
        } else {
            // 若当前与前一个间隔大于于duration，中毒时间多了duration
            res += duration;
        }
    }
    // 最后一次攻击，肯定是duration时间
    res += duration;
    return res;
};
