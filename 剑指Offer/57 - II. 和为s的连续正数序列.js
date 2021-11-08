const findContinuousSequence = target => {
    let [left, right] = [1, 1];
    let sum = 0;
    const res = [];
    while (left <= target >> 1) {
        // sum=(首项+尾项)*项数/2
        sum = ((left + right) * (right - left + 1)) >> 1;
        if (sum < target) {
            right++;
        } else if (sum > target) {
            left++;
        } else {
            const res_item = [];
            // 将[left,right]中的数都输出
            for (let i = left; i <= right; i++) {
                res_item.push(i);
            }
            res.push(res_item);
            left++;
        }
    }
    return res;
};
