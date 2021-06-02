var guessNumber = function(n) {
    const rec = (low, high) => {
        if (low > high) return;
        let mid = Math.floor((low + high) / 2);
        if (guess(mid) === 0) {
            return mid;
        } else if (guess(mid) === 1) {
            return rec(mid + 1, high);
        } else {
            return rec(low, mid - 1);
        }
    };
    return rec(1, n);
};