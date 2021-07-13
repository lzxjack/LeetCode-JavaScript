const combine = (n, k) => {
    // 最后的答案
    const res = [];
    // start是起点，path是路径的数组
    const search = (start, path) => {
        if (path.length === k) {
            // 如果路径长度为k，满足题目要求了
            // 将path推入答案res
            res.push(path.slice());
            return;
        }
        for (let i = start; i <= n; i++) {
            // 每找一个，推入path一个
            path.push(i);
            // 从i+1，接着path继续找
            search(i + 1, path);
            // 上一级找完，path尾巴要拿出来
            path.pop();
        }
    };
    search(1, []);
    return res;
};
