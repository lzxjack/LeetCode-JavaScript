const pairSum = head => {
    const nums = [];
    let p = head;
    while (p) {
        nums.push(p.val);
        p = p.next;
    }
    let max = 0;
    let [left, right] = [0, nums.length - 1];
    while (left < right) {
        max = Math.max(max, nums[left] + nums[right]);
        left++;
        right--;
    }
    return max;
};
