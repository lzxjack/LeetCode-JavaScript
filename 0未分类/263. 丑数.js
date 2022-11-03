const isUgly = n => {
    if (n === 1) return true;
    if (n <= 0) return false;
    const list = [2, 3, 5];
    if (list.includes(n)) return true;
    // 遍历2，3，5
    for (let i = 0; i < list.length; i++) {
        // 如果能整除，递归再判断
        if (n % list[i] === 0) return isUgly(Math.floor(n / list[i]));
    }
    // 遍历结束，返回false
    return false;
};

// console.log(Math.floor(9 / 3));
