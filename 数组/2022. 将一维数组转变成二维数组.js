const construct2DArray = (original, m, n) => {
    if (m * n !== original.length) return [];
    const res = [];
    for (let i = 0; i < m; i++) {
        const temp = [];
        for (let j = 0; j < n; j++) {
            temp.push(original[i * n + j]);
        }
        res.push(temp);
    }
    return res;
};
