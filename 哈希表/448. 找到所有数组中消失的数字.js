const findDisappearedNumbers = nums => {
    const len = nums.length;
    for (const num of nums) {
        const x = (num - 1) % len;
        nums[x] += len;
    }
    const res = [];
    for (let i = 0; i < len; i++) {
        if (nums[i] <= len) res.push(i + 1);
    }
    return res;
};
