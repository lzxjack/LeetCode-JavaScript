const detectCycle = head => {
    if (!head) return null;
    // 定义快慢指针
    let slow = head;
    let fast = head;

    while (fast) {
        // 慢指针一次走一步
        slow = slow.next;
        if (fast.next) {
            // 快指针一次走两步
            fast = fast.next.next;
        } else {
            // 若fast走到头了，说明没有环
            return null;
        }
        // 快慢指针相遇，有环
        if (fast === slow) {
            // 重新定义一个指针，从头开始每次走一步
            // 会与slow在环入口处相遇
            let p = head;
            while (p !== slow) {
                p = p.next;
                slow = slow.next;
            }
            return slow;
        }
    }
    return null;
};
