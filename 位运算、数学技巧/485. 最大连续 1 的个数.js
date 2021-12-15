const findMaxConsecutiveOnes = nums => {
    let [count, max] = [0, 0];
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i]) {
            count++;
        } else {
            max = Math.max(max, count);
            count = 0;
        }
    }
    max = Math.max(max, count);
    return max;
};
