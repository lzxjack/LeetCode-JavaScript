var findContentChildren = function(g, s) {
    // 排序函数，要实现升序、降序，必须要有排序函数
    const sortFunc = function(a, b) { return a - b; }
    g.sort(sortFunc);
    s.sort(sortFunc);
    let i = 0;
    s.forEach(n => {
        if (n >= g[i]) i++;
    });
    return i;
};