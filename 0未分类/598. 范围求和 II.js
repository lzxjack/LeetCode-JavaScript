const maxCount = (m, n, ops) => {
    let [minM, minN] = [m, n];
    for (const [x, y] of ops) {
        minM = Math.min(minM, x);
        minN = Math.min(minN, y);
    }
    return minM * minN;
};
