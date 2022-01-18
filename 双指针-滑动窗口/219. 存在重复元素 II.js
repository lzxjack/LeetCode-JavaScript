const containsNearbyDuplicate = (nums, k) => {
    const set = new Set();
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (i > k) {
            set.delete(nums[i - k - 1]);
        }
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
    }
    return false;
};
