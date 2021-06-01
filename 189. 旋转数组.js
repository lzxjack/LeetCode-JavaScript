const rotate = (nums, k) => {
    const len = nums.length;
    const count = k % len;
    const newNums = [...nums, ...nums].slice(len - count, 2 * len - count);
    const newLen = newNums.length;
    for (let i = 0; i < newLen; i++) {
        nums[i] = newNums[i];
    }
};
