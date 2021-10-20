const addStrings = (num1, num2) => {
    // 定义两指针分别指向两个数的尾
    let [i, j] = [num1.length - 1, num2.length - 1];
    // carry进位数
    let carry = 0;
    let res = [];

    while (i >= 0 || j >= 0 || carry) {
        // 判断指针是否到头，没到头就隐式转换成数字，到头就赋为0
        const c1 = i >= 0 ? num1[i] - '' : 0;
        const c2 = j >= 0 ? num2[j] - '' : 0;
        const sum = c1 + c2 + carry;
        // 个位数
        const leave = sum % 10;
        res.unshift(leave);
        // 更新进位为十位数
        carry = (sum - leave) / 10;
        i--;
        j--;
    }

    // 数组连接成字符串
    return res.join('');
};
