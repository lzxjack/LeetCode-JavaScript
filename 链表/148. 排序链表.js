const sortList = head => {
  let p = head;
  const nodes = [];

  while (p) {
    nodes.push(p.val);
    p = p.next;
  }

  nodes.sort((a, b) => a - b);

  const res = new ListNode(-1);
  p = res;

  for (const val of nodes) {
    p.next = new ListNode(val);
    p = p.next;
  }

  return res.next;
};
