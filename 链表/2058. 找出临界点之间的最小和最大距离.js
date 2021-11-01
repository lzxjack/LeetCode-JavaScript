const nodesBetweenCriticalPoints = head => {
    const arr = [];
    // 定义当前指针，初始化为第二个节点
    let cur = head.next;
    // 定义上一个指针，初始化第一个节点
    let pre = head;
    // 初始化临界点为2，表示第2个节点
    let curD = 2;
    // 遍历链表
    while (cur.next) {
        // 上一个节点的值
        const preVal = pre.val;
        // 当前节点的值
        const curVal = cur.val;
        // 下一个节点的值
        const nextVal = cur.next.val;
        if ((preVal > curVal && curVal < nextVal) || (preVal < curVal && curVal > nextVal)) {
            arr.push(curD);
        }
        // 更新指针和可能的临界点位置
        cur = cur.next;
        pre = pre.next;
        curD++;
    }
    // 临界点少于2个
    if (arr.length <= 1) return [-1, -1];
    // 对临界点数组降序排序
    arr.sort((a, b) => b - a);
    const len = arr.length;
    // 最大距离肯定是最大减最小
    const max = arr[0] - arr[len - 1];
    // 初始化最小距离
    let min = Infinity;
    // 最小距离肯定在相邻两个之间产生
    for (let i = 1; i < len; i++) {
        min = Math.min(min, Math.abs(arr[i - 1] - arr[i]));
    }
    return [min, max];
};
