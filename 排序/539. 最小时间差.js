// 时间转化成分钟
const getTime = str => {
    const [hour, min] = str.split(':');
    return Number(hour) * 60 + Number(min);
};

const findMinDifference = timePoints => {
    // 所有时间转化为分钟
    const mins = timePoints.map(item => getTime(item));

    // 升序排序
    mins.sort((a, b) => a - b);
    const len = mins.length;

    // 初始化，前两个间隔、首位间隔的较小者
    let res = Math.min(mins[1] - mins[0], mins[0] + 1440 - mins[len - 1]);
    for (let i = 2; i < len; i++) {
        res = Math.min(res, mins[i] - mins[i - 1]);
    }
    return res;
};
