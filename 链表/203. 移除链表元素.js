const removeElements = (head, val) => {
    // 创建新链表
    const newNode = new ListNode(0);
    // 将head幅值给新链表,新链表的next开始，才和head一样
    // 目的：处理删除头部节点的情况
    newNode.next = head;
    // 新链表指针
    let p = newNode;
    while (p && p.next) {
        if (p.next.val === val) {
            p.next = p.next.next;
        } else {
            p = p.next;
        }
    }
    return newNode.next;
};
