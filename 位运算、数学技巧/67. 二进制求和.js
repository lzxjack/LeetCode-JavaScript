const addBinary = (a, b) => {
    // 返回数组
    const res = [];
    // 进位
    let c = 0;
    // 两指针初始化尾部
    let [i, j] = [a.length - 1, b.length - 1];
    while (i >= 0 || j >= 0 || c) {
        // 获取指针指向的数字
        const aa = Number(a[i]) ? Number(a[i]) : 0;
        const bb = Number(b[j]) ? Number(b[j]) : 0;
        // 计算sum
        let sum = aa + bb + c;
        if (sum === 2) {
            // sum为2，进位，sum归0
            sum = 0;
            c = 1;
        } else if (sum === 3) {
            // sum为2，进位，sum归1
            sum = 1;
            c = 1;
        } else {
            c = 0;
        }
        // 更新后的sum从数组头部插入数组
        res.unshift(sum);
        i--;
        j--;
    }
    // 返回字符串
    return res.join('');
};
