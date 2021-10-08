const removeDuplicateNodes = head => {
    if (!head) return head;

    const set = new Set();
    set.add(head.val);
    let [pre, cur] = [head, head.next];

    while (cur) {
        if (set.has(cur.val)) {
            // 删除cur
            pre.next = cur.next;
        } else {
            set.add(cur.val);
            // 更新pre
            pre = pre.next;
        }
        // 更新cur
        cur = cur.next;
    }

    return head;
};
