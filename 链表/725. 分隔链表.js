const splitListToParts = (head, k) => {
    // 统计链表长度
    let [len, p] = [0, head];
    while (p) {
        len++;
        p = p.next;
    }

    // 分隔链表
    const [nodeLen, remain] = [Math.floor(len / k), len % k];
    // 结果数组
    const res = [];
    // 从头结点开始
    let cur = head;
    // 一共分为k条
    for (let i = 0; i < k; i++) {
        res[i] = cur;
        // 计算每条的链表长度，将remain平均分给排在靠前的
        let listLen = nodeLen + (remain > i ? 1 : 0);
        while (listLen > 1) {
            // 长度为listLen，要右移listLen-1次
            cur = cur.next;
            listLen--;
        }
        if (cur) {
            // 若cur不为空，将cur下节点置空，并后移
            const temp = cur.next;
            cur.next = null;
            cur = temp;
        }
    }
    return res;
};
