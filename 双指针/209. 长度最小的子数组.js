const minSubArrayLen = (target, nums) => {
    // 数组长度
    const len = nums.length;
    // 定义左指针、右指针、和、最小长度
    // 最先长度初始值比len大
    let left = 0,
        right = 0,
        sum = 0,
        min = len + 1;
    // 右指针没走到头，就一直遍历
    while (right < len) {
        // 右指针走过的数累加到sum
        sum += nums[right];
        right++;
        // 一旦sum>=target，就不断地走左指针
        while (sum >= target) {
            // 更新最小值
            min = min < right - left ? min : right - left;
            // 先将左指针指的数移出sum，再将左指针右移1
            sum -= nums[left];
            left++;
        }
        // 不符合条件了，就继续走右指针
    }
    // 若min变化过，则肯定不满足min > len，返回min
    // 没变化过，代表遍历完后没有找到符合条件的，返回0
    return min > len ? 0 : min;
};
