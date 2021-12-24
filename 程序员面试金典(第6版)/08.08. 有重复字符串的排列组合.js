const permutation = S => {
    const sArr = S.split('').sort();
    const n = sArr.length;
    const res = [];
    const allowVisit = new Array(n).fill(true);

    const search = path => {
        if (path.length === n) {
            res.push(path);
            return;
        }
        for (let i = 0; i < n; i++) {
            if (i > 0 && sArr[i - 1] === sArr[i] && !allowVisit[i - 1]) continue;
            if (allowVisit[i]) {
                allowVisit[i] = false;
                search(path + sArr[i]);
                allowVisit[i] = true;
            }
        }
    };
    search('');
    return res;
};
