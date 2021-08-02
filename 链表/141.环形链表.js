const hasCycle = head => {
    let [p1, p2] = [head, head];
    while (p1 && p2 && p2.next) {
        p1 = p1.next;
        p2 = p2.next.next;
        if (p1 === p2) {
            // 退出循环
            return true;
        }
    }
    return false;
};
