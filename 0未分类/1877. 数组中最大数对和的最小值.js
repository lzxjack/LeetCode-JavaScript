const minPairSum = nums => {
    let max = 0;
    nums.sort((a, b) => a - b);
    const len = nums.length;
    for (let i = 0; i < len >> 1; i++) {
        max = Math.max(max, nums[i] + nums[len - 1 - i]);
    }
    return max;
};
