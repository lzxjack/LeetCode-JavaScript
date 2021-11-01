const convertInteger = (A, B) => {
    let n = A ^ B;
    let count = 0;
    while (n) {
        n = n & (n - 1);
        count++;
    }
    return count;
};
