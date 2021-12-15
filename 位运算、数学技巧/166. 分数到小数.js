const fractionToDecimal = (a, b) => {
    //   如果答案没有小数点，直接返回，注意要字符串
    if (!(a % b)) return `${a / b}`;

    // 整数部分
    let res = '';
    // 如果有一个小于0，需要添加负号
    if (a * b < 0) res += '-';
    a = Math.abs(a);
    b = Math.abs(b);
    // 整数部分+小数点
    res += `${Math.floor(a / b)}.`;

    // 小数部分
    const arr = [];
    const map = new Map();
    let index = 0;
    a %= b;
    while (a && !map.has(a)) {
        map.set(a, index++);
        a *= 10;
        arr.push(Math.floor(a / b));
        a %= b;
    }
    if (a) {
        // a不是0，说明上面的while循环是map中重复了才退出的
        const insertIndex = map.get(a);
        // 在循环开始的位置插入'('，后面的元素后移
        arr.splice(insertIndex, 0, '(');
        // 尾部插入')'
        arr.push(')');
    }

    // 整数部分拼接小数部分
    return res + arr.join('');
};
