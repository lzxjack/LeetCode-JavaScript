const maxDepth = s => {
    let count = 0;
    let max = 0;
    for (const char of s) {
        if (char === '(') {
            count++;
            max = Math.max(max, count);
        } else if (char === ')') {
            count--;
        }
    }
    return max;
};
