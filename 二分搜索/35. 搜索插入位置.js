const searchInsert = (nums, target) => {
    let [low, high] = [0, nums.length - 1];
    while (low <= high) {
        const mid = (low + high) >> 1;
        const midItem = nums[mid];
        if (midItem > target) {
            high = mid - 1;
        } else if (midItem < target) {
            low = mid + 1;
        } else {
            // 找到了，返回mid
            return mid;
        }
    }
    // 找不到，返回low
    return low;
};
