const increasingTriplet = nums => {
    let [left, mid] = [Infinity, Infinity];
    for (const right of nums) {
        if (right > mid) {
            return true;
        } else if (right <= left) {
            left = right;
        } else {
            mid = right;
        }
    }
    return false;
};
