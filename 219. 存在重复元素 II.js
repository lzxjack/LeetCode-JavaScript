const containsNearbyDuplicate = (nums, k) => {
    const map = new Map();
    // map里存相应每个元素的下标{nums[i]:i}
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] !== undefined && i - map[nums[i]] <= k) {
            return true;
        }
        map[nums[i]] = i;
    }
    return false;
};
