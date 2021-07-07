const middleNode = head => {
    let slow, fast;
    slow = fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};
