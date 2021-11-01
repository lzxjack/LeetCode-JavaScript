const smallestEqual = nums => {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (i % 10 === nums[i]) return i;
    }
    return -1;
};
