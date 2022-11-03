const findRepeatNumber = nums => {
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        while (cur !== i) {
            if (nums[i] === nums[cur]) return cur;
            nums[i] = nums[cur];
            nums[cur] = cur;
        }
    }
    return null;
};
