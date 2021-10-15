const countAndSay = n => {
    let str = '1';
    for (let i = 1; i < n; i++) {
        const res = [];
        // start:当前起始位置
        // index:当前索引
        let [start, index] = [0, 0];
        while (index < str.length) {
            while (str[index] === str[start]) {
                // 统计当前数字的个数
                // 个数为index - start
                index++;
            }
            res.push(`${index - start}${str[start]}`);
            // 更新起始位置，统计下一个数字
            start = index;
        }
        // 更新上一项外观数列
        str = res.join('');
    }
    return str;
};
