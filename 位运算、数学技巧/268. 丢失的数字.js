const missingNumber = nums => {
    let res = 0;
    const n = nums.length;
    for (let i = 0; i <= n; i++) {
        res = res ^ i ^ nums[i];
    }
    return res;
};
