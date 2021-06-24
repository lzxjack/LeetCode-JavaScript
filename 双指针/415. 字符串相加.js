const addStrings = (num1, num2) => {
    // 定义两指针分别指向两个数的尾
    let [i, j] = [num1.length - 1, num2.length - 1];
    // carry进位数
    let [carry, res] = [0, []];

    while (i >= 0 || j >= 0 || carry !== 0) {
        // 判断指针是否到头，没到头就隐式转换成数字，到头就赋为0
        const c1 = i >= 0 ? num1[i] - '' : 0;
        const c2 = j >= 0 ? num2[j] - '' : 0;
        const sum = c1 + c2 + carry;
        // 取余数，从队头放入res
        res.unshift(sum % 10);
        // 重新设置进位，'|0'可以取整
        carry = (sum / 10) | 0;
        i--;
        j--;
    }

    // 数组连接成字符串
    return res.join('');
};

addStrings('', '45');
