let removeNthFromEnd = function (head, n) {
    // 记录链表的长度
    let p = head;
    let length = 0;
    while (p) {
        p = p.next;
        length++;
    }
    // 计算要移位的数量
    let count = length - n - 1;
    if (count === -1) return head.next;
    p = head;
    // 指针后移，数量用完后，则表示到达了要删除的节点的上一个节点
    while (count) {
        p = p.next;
        count--;
    }
    // 删除节点
    p.next = p.next.next;
    return head;
};
