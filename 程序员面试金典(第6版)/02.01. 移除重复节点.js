const removeDuplicateNodes = head => {
    if (!head) return head;

    const set = new Set();
    set.add(head.val);
    let [pre, cur] = [head, head.next];

    while (cur) {
        if (set.has(cur.val)) {
            pre.next = cur.next;
        } else {
            set.add(cur.val);
            pre = pre.next;
        }
        cur = cur.next;
    }

    return head;
};
