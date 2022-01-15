class Solution {
    constructor(head) {
        // 保存头结点
        this.head = head;
        // 统计链表长度
        this.p = head;
        this.len = 0;
        while (this.p) {
            this.len++;
            this.p = this.p.next;
        }
    }
    getRandom() {
        // 获得链表长度内的随机数
        let count = Math.floor(Math.random() * this.len);
        // 遍历count次链表，
        let p = this.head;
        while (count--) {
            p = p.next;
        }
        // 最后返回值
        return p.val;
    }
}
