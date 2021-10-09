// 计算1的个数
const count1 = n => {
    let count = 0;
    while (n !== 0) {
        n = n & (n - 1);
        count++;
    }
    return count;
};

const readBinaryWatch = turnedOn => {
    const res = [];
    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            if (count1(h) + count1(m) === turnedOn) {
                res.push(`${h}:${m < 10 ? '0' : ''}${m}`);
            }
        }
    }
    return res;
};
