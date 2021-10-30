const combine = (n, k) => {
    // 回溯
    const backTrack = (start, path) => {
        // 如果当前路径的长度达到要求
        // 拷贝一份，推入答案数组
        if (path.length === k) {
            res.push([...path]);
            return;
        }
        for (let i = start; i <= n; i++) {
            path.push(i);
            // 更新起点，继续遍历
            backTrack(i + 1, path);
            // 向上回溯
            path.pop();
        }
    };
    const res = [];
    // 路径数组
    const path = [];
    backTrack(1, path);
    return res;
};
