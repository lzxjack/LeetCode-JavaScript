const numberOfArithmeticSlices = nums => {
    const len = nums.length;
    if (len < 3) return 0;
    let [res, count] = [0, 0];
    for (let i = 2; i < len; i++) {
        if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
            count++;
            res += count;
        } else {
            count = 0;
        }
    }
    return res;
};
