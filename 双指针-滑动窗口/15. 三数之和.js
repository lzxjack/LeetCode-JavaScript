const threeSum = nums => {
    const len = nums.length;
    const res = [];
    // 长度小于3，直接返回空数组
    if (len < 3) return res;
    // 升序排序
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        // 当前元素＞0，肯定不可能再sum=0了。
        if (nums[i] > 0) return res;
        // 排除重复元素
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        // 定义双指针
        let [left, right] = [i + 1, len - 1];
        while (left < right) {
            // 当前三数之和
            const sum = nums[i] + nums[left] + nums[right];
            if (sum > 0) {
                // 太大了，right左移
                right--;
            } else if (sum < 0) {
                // 太小了，left右移
                left++;
            } else {
                // 放入答案数组
                res.push([nums[i], nums[left], nums[right]]);
                // 去除重复元素
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }
        }
    }
    return res;
};
