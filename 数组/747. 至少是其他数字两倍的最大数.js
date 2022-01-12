const dominantIndex = nums => {
    const len = nums.length;
    if (len === 1) return 0;
    let [max, less] = [-1, -1];
    let index = -1;
    for (let i = 0; i < len; i++) {
        if (nums[i] > max) {
            less = max;
            max = nums[i];
            index = i;
        } else if (nums[i] > less) {
            less = nums[i];
        }
    }
    return max >= 2 * less ? index : -1;
};
