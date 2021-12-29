const countQuadruplets = nums => {
    const len = nums.length;
    let res = 0;
    const map = {};
    for (let c = len - 2; c >= 2; c--) {
        map[nums[c + 1]] = (map[nums[c + 1]] || 0) + 1;
        for (let a = 0; a < c; a++) {
            for (let b = a + 1; b < c; b++) {
                res += map[nums[a] + nums[b] + nums[c]] || 0;
            }
        }
    }
    return res;
};
