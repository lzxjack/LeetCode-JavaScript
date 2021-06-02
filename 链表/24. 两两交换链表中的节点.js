function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const swapPairs = function (head) {
    // 终止条件：链表没有节点了或只剩一个节点，无法交换了
    if (!head || !head.next) return head;
    // 交换两个节点
    const newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;
    return newHead;
};
