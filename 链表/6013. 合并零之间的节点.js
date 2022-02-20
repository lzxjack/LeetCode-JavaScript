const mergeNodes = head => {
  const list = [];
  let p = head.next;
  let sum = 0;

  // 先得到每组节点之和
  while (p) {
    if (p.val) {
      sum += p.val;
    } else {
      list.push(sum);
      sum = 0;
    }
    p = p.next;
  }

  // 虚拟头节点
  let res = new ListNode(-1);
  // 定义指针k遍历构造
  let k = res;
  for (const val of list) {
    k.next = new ListNode(val);
    k = k.next;
  }
  return res.next;
};
