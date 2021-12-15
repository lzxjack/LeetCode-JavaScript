const majorityElement = nums => {
    // 元素和票数
    let [element1, element2] = [0, 0];
    let [vote1, vote2] = [0, 0];

    for (const num of nums) {
        if (vote1 && num === element1) {
            // 再次遇到num，投票加一
            vote1++;
        } else if (vote2 && num === element2) {
            vote2++;
        } else if (!vote1) {
            // 第一次遇到num，更新element，投票加一
            element1 = num;
            vote1++;
        } else if (!vote2) {
            element2 = num;
            vote2++;
        } else {
            // 遇到第三个数，抵消一次
            vote1--;
            vote2--;
        }
    }

    // 统计剩下数出现的次数
    let [count1, count2] = [0, 0];
    for (const num of nums) {
        if (vote1 && num === element1) count1++;
        if (vote2 && num === element2) count2++;
    }

    // 判断出现的次数是否大于n/3
    const res = [];
    if (vote1 && count1 > Math.floor(nums.length / 3)) res.push(element1);
    if (vote2 && count2 > Math.floor(nums.length / 3)) res.push(element2);

    return res;
};
