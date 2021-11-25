const combinationSum = (candidates, target) => {
    const len = candidates.length;
    const res = [];
    // 升序排序
    candidates.sort((a, b) => a - b);
    const search = (path, target, start) => {
        if (target === 0) {
            // 满足条件，拷贝一份，放入答案数组
            res.push([...path]);
            return;
        }
        // 注意起点为start
        for (let i = start; i < len; i++) {
            // 剩余的目标数小于当前元素，后面的元素只会更大，直接放弃此轮
            if (target < candidates[i]) return;
            path.push(candidates[i]);
            // 数字可以重复，所以传入i
            search(path, target - candidates[i], i);
            path.pop();
        }
    };
    search([], target, 0);
    return res;
};
