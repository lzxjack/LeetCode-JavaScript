const findDuplicate = nums => {
    let [slow, fast] = [0, 0];
    slow = nums[slow];
    fast = nums[nums[fast]];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    fast = 0;
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return fast;
};
