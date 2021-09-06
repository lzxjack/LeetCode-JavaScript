const search = (nums, target) => {
    // 定义左右两个索引
    let [low, high] = [0, nums.length - 1];
    while (low <= high) {
        // mid为中间索引
        const mid = (low + high) >> 1;
        // 中间值
        const item = nums[mid];
        if (item > target) {
            // 中间值大于目标值，说明在左边
            high = mid - 1;
        } else if (item < target) {
            // 中间值小于目标值，说明在右边
            low = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
};
