const areNumbersAscending = s => {
    // 将数字提取到数组中，'+'表示能提取连续的数字
    const res = s.match(/\d+/g);
    const len = res.length;
    for (let i = 1; i < len; i++) {
        if (Number(res[i - 1]) >= Number(res[i])) return false;
    }
    return true;
};
