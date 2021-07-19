const maxFrequency = (nums, k) => {
    // 排序
    nums.sort((a, b) => a - b);
    const len = nums.length;
    // 定义左指针，初试指向0
    // res最低是1
    let [sum, left, res] = [0, 0, 1];
    for (let right = 1; right < len; right++) {
        // 右指针每次遍历，更新sum
        sum += (nums[right] - nums[right - 1]) * (right - left);
        // 如果sum比k大，需要降低sum
        // 通过左移左指针来降低
        while (sum > k) {
            sum -= nums[right] - nums[left];
            left++;
        }
        // 在sum允许的范围内，更新最高的频次
        // 即两指针的最大距离
        res = Math.max(res, right - left + 1);
    }
    return res;
};
