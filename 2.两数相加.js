// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

var addTwoNumbers = function(l1, l2) {
    const l3 = new ListNode(0);
    let p1 = l1;
    let p2 = l2;
    let p3 = l3;
    let c = 0;
    while (p1 || p2) {
        let v1 = p1 ? p1.val : 0;
        let v2 = p2 ? p2.val : 0;
        let val = v1 + v2 + c;
        c = Math.floor(val / 10);
        p3.next = new ListNode(val % 10);
        if (p1) p1 = p1.next;
        if (p2) p2 = p2.next;
        p3 = p3.next;
    }
    if (c) {
        p3.next = new ListNode(c);
    }
    return l3.next;
};