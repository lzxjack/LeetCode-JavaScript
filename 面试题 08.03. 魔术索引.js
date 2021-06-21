const findMagicIndex = nums => {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] === i) return i;
    }
    return -1;
};
