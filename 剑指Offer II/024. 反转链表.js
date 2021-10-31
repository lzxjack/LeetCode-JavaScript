const reverseList = head => {
    // 定义pre指向头部的null
    // cur指向head
    let [pre, cur] = [null, head];
    let temp;
    while (cur) {
        // 将cur.next保存下
        temp = cur.next;
        // 改变cur的指向
        cur.next = pre;
        // 两指针右移
        pre = cur;
        cur = temp;
    }
    // 到最后，cur指向null，返回pre
    return pre;
};
