const checkWays = pairs => {
  const adj = new Map();
  for (const p of pairs) {
    if (!adj.has(p[0])) {
      adj.set(p[0], new Set());
    }
    if (!adj.has(p[1])) {
      adj.set(p[1], new Set());
    }
    adj.get(p[0]).add(p[1]);
    adj.get(p[1]).add(p[0]);
  }

  let root = -1;
  const entries = new Set();
  for (const entry of adj.entries()) {
    entries.add(entry);
  }
  for (const [node, neg] of entries) {
    if (neg.size === adj.size - 1) {
      root = node;
    }
  }
  if (root === -1) {
    return 0;
  }
  let res = 1;
  for (const [node, neg] of entries) {
    if (root === node) {
      continue;
    }
    const currDegree = neg.size;
    let parentNode = -1;
    let parentDegree = Number.MAX_SAFE_INTEGER;

    for (const neighbour of neg) {
      if (
        adj.has(neighbour) &&
        adj.get(neighbour).size < parentDegree &&
        adj.get(neighbour).size >= currDegree
      ) {
        parentNode = neighbour;
        parentDegree = adj.get(neighbour).size;
      }
    }
    if (parentNode === -1) {
      return 0;
    }
    for (const neighbour of neg) {
      if (neighbour === parentNode) {
        continue;
      }
      if (!adj.get(parentNode).has(neighbour)) {
        return 0;
      }
    }
    if (parentDegree === currDegree) {
      res = 2;
    }
  }
  return res;
};
