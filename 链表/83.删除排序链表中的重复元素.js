// 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

// 示例 1:

// 输入: 1->1->2
// 输出: 1->2
// 示例 2:

// 输入: 1->1->2->3->3
// 输出: 1->2->3

const deleteDuplicates = head => {
    // 定义指针指向头部
    let p = head;
    // 当前有值、且下一节点有值
    while (p && p.next) {
        if (p.val === p.next.val) {
            // 如果当前值等于下一节点的值，删除下一节点
            p.next = p.next.next;
        } else {
            p = p.next;
        }
    }
    return head;
};
