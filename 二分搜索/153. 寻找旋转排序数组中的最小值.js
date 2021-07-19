const findMin = nums => {
    let [left, right] = [0, nums.length - 1];
    while (left <= right) {
        const mid = (left + right) >> 1;
        const item = nums[mid];
        if (item < nums[right]) {
            // 如果当前值小于最右边的值
            // 最小值在mid左侧，也有可能是mid
            right = mid;
        } else {
            // 如果当前值大于等于最右边的值
            // 最小值在mid右侧，且不可能是mid
            left = mid + 1;
        }
    }
    return nums[left - 1];
};
