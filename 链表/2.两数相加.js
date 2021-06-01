// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

const addTwoNumbers = (l1, l2) => {
    // 定义一个新链表
    const l3 = new ListNode(0);
    // 定义三个链表的指针
    let p1 = l1;
    let p2 = l2;
    let p3 = l3;
    // c表示进位数，一开始为0
    let c = 0;
    // 遍历两个链表，直到两个都为空为止
    while (p1 || p2) {
        // p1指针当前的值
        let v1 = p1 ? p1.val : 0;
        // p2指针当前的值
        let v2 = p2 ? p2.val : 0;
        // 将两个指针的值和进位相加
        let val = v1 + v2 + c;
        // 更新进位数
        c = Math.floor(val / 10);
        // 更新新链表下一位
        p3.next = new ListNode(val % 10);
        // 如果p1还有值，更新到下一位
        if (p1) p1 = p1.next;
        if (p2) p2 = p2.next;
        // p3更新到下一位
        p3 = p3.next;
    }
    // 如果到最后还有进位，再新加一个节点
    if (c) {
        // 存储最后的进位
        p3.next = new ListNode(c);
    }
    return l3.next;
};
