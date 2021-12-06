const deleteMiddle = head => {
    // 快指针
    let fast = head;
    // 只有一个节点的特殊情况
    if (!fast.next) return null;
    // 定义慢指针，虚拟节点
    let low = new ListNode(-1);
    // 初始化慢指针
    low.next = head;
    while (fast?.next) {
        fast = fast.next.next;
        low = low.next;
    }
    // 删除low下一个节点
    low.next = low.next.next;
    return head;
};
