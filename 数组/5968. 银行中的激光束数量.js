const numberOfBeams = bank => {
    let res = 0;
    let pre = 0;
    let cur = 0;
    for (let i = 0; i < bank.length; i++) {
        const item = bank[i];
        // 统计当前行，安全设备的数量
        cur = 0;
        for (let i = 0; i < item.length; i++) {
            if (item[i] === '1') cur++;
        }
        // 当前行没设备，直接跳过
        if (cur === 0) continue;
        // 更新res
        if (pre > 0) {
            res += pre * cur;
        }
        pre = cur;
    }
    return res;
};
