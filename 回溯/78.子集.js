const subsets = nums => {
    // 定义回溯函数
    const backtrack = (nums, start, path) => {
        // 路径要拷贝一份
        res.push([...path]);
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(nums, i + 1, path);
            path.pop();
        }
    };
    // 结果数组
    const res = [];
    // 起点0，路径空数组
    backtrack(nums, 0, []);
    return res;
};
