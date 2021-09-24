function Node(val, prev, next, child) {
    this.val = val;
    this.prev = prev;
    this.next = next;
    this.child = child;
}

const flatten = head => {
    if (!head) return head;
    const res = new Node(-1, null, null, null);
    // prev指针
    let prev = res;
    // 头部节点入栈
    const stack = [head];
    while (stack.length) {
        // 栈顶元素出栈，当前指针指向栈顶元素
        const cur = stack.pop();
        // 双向连接
        prev.next = cur;
        cur.prev = prev;
        // 栈先入后出，先进 next，后进child
        if (cur && cur.next) {
            stack.push(cur.next);
        }
        if (cur && cur.child) {
            stack.push(cur.child);
            // child要置空
            cur.child = null;
        }
        // 更新上一节点
        prev = cur;
    }
    // 将头部与res节点的prev断开
    res.next.prev = null;
    return res.next;
};
