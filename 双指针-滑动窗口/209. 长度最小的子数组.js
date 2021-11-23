const minSubArrayLen = (target, nums) => {
    const len = nums.length;
    let left = 0,
        sum = 0,
        min = len + 1;
    // 右指针遍历数组
    for (let right = 0; right < len; right++) {
        // 若发现单子数字大于target，直接返回1
        if (nums[right] >= target) return 1;
        sum += nums[right];
        // 若sum太大了，不断右移左指针，并更新min
        while (sum >= target) {
            min = Math.min(min, right - left + 1);
            sum -= nums[left++];
        }
    }
    return min === len + 1 ? 0 : min;
};
