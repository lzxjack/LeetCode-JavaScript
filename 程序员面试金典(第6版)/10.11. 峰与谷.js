const wiggleSort = nums => {
    // 升序排序
    nums.sort((a, b) => a - b);

    // 头尾依次插入
    const res = [];
    let flag = true;
    while (nums.length) {
        res.push(flag ? nums.pop() : nums.shift());
        flag = !flag;
    }

    // 恢复原数组
    const len = res.length;
    for (let i = 0; i < len; i++) {
        nums[i] = res[i];
    }
};
