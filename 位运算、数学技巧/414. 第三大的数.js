const thirdMax = nums => {
    let [a, b, c] = [-Infinity, -Infinity, -Infinity];
    for (const num of nums) {
        if (num > a) {
            [a, b, c] = [num, a, b];
        } else if (a > num && num > b) {
            [a, b, c] = [a, num, b];
        } else if (b > num && num > c) {
            [a, b, c] = [a, b, num];
        }
    }
    return c > -Infinity ? c : a;
};
