const numOfPairs = (nums, target) => {
    let res = 0;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        // 若开头就对不上，直接进行下一个的判断
        if (target.indexOf(nums[i]) !== 0) continue;
        for (let j = 0; j < len; j++) {
            // 排除i=j的情况
            if (i === j) continue;
            if (`${nums[i]}${nums[j]}` === target) res++;
        }
    }
    return res;
};
