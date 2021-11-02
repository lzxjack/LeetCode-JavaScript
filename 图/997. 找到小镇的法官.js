const findJudge = (n, trust) => {
    // 特殊情况
    if (n === 1) return 1;
    // 初始化出度是否为0的数组
    // 注意题目是1~n编号，所以长度设为n+1方便些
    const flag = new Array(n + 1).fill(true);
    const map = new Map();
    for (const [a, b] of trust) {
        // a节点的出度肯定不是0了
        flag[a] = false;
        // 节点的入度计数
        map.set(b, (map.get(b) || 0) + 1);
    }
    // 寻找出度为0，且入度是n-1的点
    // 注意从i=1开始
    for (let i = 1; i <= n; i++) {
        if (flag[i] && map.get(i) === n - 1) return i;
    }
    return -1;
};
