const kWeakestRows = (mat, k) => {
    let res = [];
    for (let i = 0; i < mat.length; i++) {
        // 查找每行中1的个数
        const num = mat[i].indexOf(0) === -1 ? mat[i].length : mat[i].indexOf(0);
        res.push([i, num]);
    }
    // 将res中的数组按照num进行升序排序
    res.sort((a, b) => a[1] - b[1]);
    // res中，提取num
    res = res.map(item => item[0]);
    // 截取前k个
    res.splice(k);
    return res;
};
