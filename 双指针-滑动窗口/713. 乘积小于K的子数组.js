const numSubarrayProductLessThanK = (nums, k) => {
    // nums[i]>=1,所以k不能<=1
    if (k <= 1) return 0;
    let res = 1,
        count = 0,
        left = 0;
    const len = nums.length;
    // 右指针遍历数组
    for (let right = 0; right < len; right++) {
        res *= nums[right];
        // 若不满足条件，左指针右移
        while (res >= k) res /= nums[left++];
        // 当前left和right中，满足条件的数组有right - left + 1个
        count += right - left + 1;
    }
    return count;
};
