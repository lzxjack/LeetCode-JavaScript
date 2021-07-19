const search = (nums, target) => {
    let [left, right] = [0, nums.length - 1];
    while (left <= right) {
        const mid = (left + right) >> 1;
        if (nums[mid] === target) return mid;
        if (nums[left] < nums[mid]) {
            // 左边是升序的
            if (nums[left] <= target && target <= nums[mid]) {
                // target在升序的里面
                right = mid - 1;
            } else {
                // target不在升序的里面
                left = mid + 1;
            }
        } else {
            // 右边升序
            if (nums[mid] <= target && target <= nums[right]) {
                // target在升序的里面
                left = mid + 1;
            } else {
                // target不在升序的里面
                right = mid - 1;
            }
        }
    }
    return nums[left + 1] === target ? left + 1 : -1;
};
