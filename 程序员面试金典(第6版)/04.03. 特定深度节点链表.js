const listOfDepth = root => {
    if (!root) return [];
    // 根节点入队
    const q = [root];
    // 返回值
    const res = [];
    while (q.length) {
        // 当前层的数量
        let nowlen = q.length;
        const len = nowlen;
        let head = new ListNode(null);
        while (nowlen) {
            // 队头出队
            const n = q.shift();
            if (nowlen === len) {
                // 当前层第一个元素
                // 创建头节点，并推入数组
                head = new ListNode(n.val);
                res.push(head);
            } else {
                // 不是第一个元素，更新节点值
                head.val = n.val;
            }
            if (nowlen > 1) {
                // 不是当前层中最后一个元素
                // 创建下一个节点，并移动指针
                head.next = new ListNode(null);
                head = head.next;
            }
            n.left && q.push(n.left);
            n.right && q.push(n.right);
            nowlen--;
        }
    }
    return res;
};
