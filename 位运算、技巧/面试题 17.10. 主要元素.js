const majorityElement = nums => {
    let [res, count] = [null, 0];
    for (const num of nums) {
        // 遍历nums，如果count为0，元素赋给res
        if (count === 0) res = num;
        // 如果元素等于res，count++，否则count--
        if (num === res) {
            count++;
        } else {
            count--;
        }
    }
    // 最后验证res有没有超过一半
    count = 0;
    for (const num of nums) {
        if (num === res) count++;
    }
    return count > nums.length >> 1 ? res : -1;
};
