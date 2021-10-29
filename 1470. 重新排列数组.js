const shuffle = (nums, n) => {
    const res = [];
    for (let i = 0; i < n; i++) {
        res.push(nums[i]);
        res.push(nums[i + n]);
    }
    return res;
};

console.log(shuffle([1, 2, 3, 4, 5, 6], 3));
