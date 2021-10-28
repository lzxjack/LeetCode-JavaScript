const addTwoNumbers = (l1, l2) => {
    // 创建新链表
    const l3 = new ListNode(-1);
    // 定义三个链表的指针
    let [p1, p2, p3] = [l1, l2, l3];
    // 进位，初始0
    let c = 0;
    while (p1 || p2) {
        // 取出l1、l2当前节点的值，若遍历完了，则赋值为0
        const val1 = p1 ? p1.val : 0;
        const val2 = p2 ? p2.val : 0;
        // 计算和
        const val = val1 + val2 + c;
        // 更新进位
        c = Math.floor(val / 10);
        // 更新l3的节点
        p3.next = new ListNode(val % 10);
        p1 = p1?.next;
        p2 = p2?.next;
        p3 = p3.next;
    }
    // 如果进位还有，加到l3最后
    if (c) p3.next = new ListNode(c);
    return l3.next;
};
