// 判断是否闰年
const isLeap = year => !(year % 400) || (!(year % 4) && year % 100);

const dayOfTheWeek = (day, month, year) => {
    const res = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const monthDays = [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days = 0;
    // 计算年份贡献的天数
    for (let i = 1971; i <= year - 1; i++) {
        // 闰年，多一天
        days += isLeap(i) ? 366 : 365;
    }
    // 计算月份贡献的天数
    for (let i = 1; i <= month - 1; i++) {
        // 闰年2月多一天
        if (i === 2 && isLeap(year)) days++;
        days += monthDays[i];
    }
    // 计算日贡献的天数
    days += day;
    return res[(days + 3) % 7];
};
