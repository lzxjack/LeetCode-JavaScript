const reverseBetween = (head, left, right) => {
    let res = new ListNode(-1);
    res.next = head;

    let pre = res;
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next;
    }
    let cur = pre.next;
    for (let i = 0; i < right - left; i++) {
        const next = cur.next;
        cur.next = next.next;
        next.next = pre.next;
        pre.next = next;
    }

    return res.next;
};
