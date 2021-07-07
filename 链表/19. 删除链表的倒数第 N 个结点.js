const removeNthFromEnd = (head, n) => {
    // 定义虚拟节点
    const dummy = new ListNode(-1, head);
    // 定义左右指针，都指向虚拟节点
    let left = dummy,
        right = dummy;
    // 右指针先走n+1步
    while (1 + n--) {
        right = right.next;
    }
    // 如果此时右指针到null了，说明删除的是第一个节点
    // 直接返回dummy.next.next;
    if (!right) return dummy.next.next;
    // 右指针没到头
    while (right) {
        // 左右指针一起走
        right = right.next;
        left = left.next;
    }
    // 右指针走到null之后，删除左指针的下一个节点即可
    left.next = left.next.next;
    // 返回虚拟节点的next
    return dummy.next;
};
