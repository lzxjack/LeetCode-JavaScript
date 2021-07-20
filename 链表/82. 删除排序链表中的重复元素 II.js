const deleteDuplicates = head => {
    // 新建虚拟头节点
    const res = new ListNode(0, head);
    let cur = res;
    while (cur.next && cur.next.next) {
        // 如果下一个值等于下下个值
        if (cur.next.val === cur.next.next.val) {
            const x = cur.next.val;
            // 删除重复的值，一直到不等于x
            while (cur.next && cur.next.val === x) {
                cur.next = cur.next.next;
            }
        } else {
            // 如果下一个值不等于下下个值，正常遍历
            cur = cur.next;
        }
    }
    // 返回虚拟头节点的next
    return res.next;
};
