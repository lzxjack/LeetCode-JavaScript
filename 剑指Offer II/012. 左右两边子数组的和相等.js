const pivotIndex = nums => {
    const len = nums.length;
    for (let i = 1; i < len; i++) {
        nums[i] += nums[i - 1];
    }
    for (let i = 0; i < len; i++) {
        const left = nums[i - 1] || 0;
        const right = nums[len - 1] - nums[i];
        if (left === right) return i;
    }
    return -1;
};
