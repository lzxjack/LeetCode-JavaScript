const sortedSquares = nums => {
    const res = [];
    let [left, right] = [0, nums.length - 1];
    while (left <= right) {
        const leftNum = Math.abs(nums[left]);
        const rightNum = Math.abs(nums[right]);
        if (leftNum > rightNum) {
            res.unshift(leftNum * leftNum);
            left++;
        } else {
            res.unshift(rightNum * rightNum);
            right--;
        }
    }
    return res;
};
