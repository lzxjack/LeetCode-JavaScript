const findErrorNums = nums => {
    const numArr = [];
    for (let i = 0; i < nums.length; i++) {
        numArr.push(i + 1);
    }
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        if (numArr.indexOf(nums[i]) === -1) {
            res.push(nums[i]);
        } else {
            numArr.splice(numArr.indexOf(nums[i]), 1);
        }
    }
    return [...res, ...numArr];
};

findErrorNums([3, 2, 3, 4, 6, 5]);
