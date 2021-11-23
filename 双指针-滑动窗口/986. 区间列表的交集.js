const intervalIntersection = (A, B) => {
    let [i, j] = [0, 0];
    const [lenA, lenB] = [A.length, B.length];
    const res = [];
    while (i < lenA && j < lenB) {
        const start = Math.max(A[i][0], B[j][0]);
        const end = Math.min(A[i][1], B[j][1]);
        if (start <= end) res.push([start, end]);
        if (A[i][1] <= B[j][1]) {
            i++;
        } else {
            j++;
        }
    }
    return res;
};
