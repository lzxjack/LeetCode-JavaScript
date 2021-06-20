const mySqrt = x => {
    let [low, high] = [0, x];
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (mid * mid > x) {
            high = mid - 1;
        } else if (mid * mid < x) {
            low = mid + 1;
        } else {
            return mid;
        }
    }
    return high;
};
