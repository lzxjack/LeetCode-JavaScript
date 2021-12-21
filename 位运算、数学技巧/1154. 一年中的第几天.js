// 检验是否是闰年
const checkYear = year => {
    if (year % 4 === 0 && year % 100 !== 0) return true;
    if (year % 400 === 0) return true;
    return false;
};

const dayOfYear = date => {
    // 不是闰年的月份天数前缀和
    const days = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
    // 闰年的月份天数前缀和
    const leapDays = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
    // 取出年、月、日
    const [year, month, day] = date.split('-').map(item => Number(item));
    // 判断是否是闰年
    const isLeap = checkYear(year);
    // 得出结果
    return (isLeap ? leapDays[month - 1] : days[month - 1]) + day;
};
