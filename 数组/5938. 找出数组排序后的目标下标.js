const targetIndices = (nums, target) => {
    nums.sort((a, b) => a - b);
    const res = [];
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] === target) res.push(i);
    }
    return res;
};
