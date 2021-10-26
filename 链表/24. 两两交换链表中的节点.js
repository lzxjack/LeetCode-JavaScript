const swapPairs = head => {
    // 终止条件：链表没有节点了或只剩一个节点，无法交换了
    if (!head || !head.next) return head;
    // head为旧链表第一个节点，新链表第二个节点
    // newHead为旧链表第二个节点、新链表第一个节点
    const newHead = head.next;
    // 交换其余节点，交换后的头结点作为新链表第二个节点的下一个节点
    head.next = swapPairs(newHead.next);
    // 新链表第一个节点的下一个节点为head
    newHead.next = head;
    return newHead;
};
