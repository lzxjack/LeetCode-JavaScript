const largestWordCount = (messages, senders) => {
  const map = new Map();

  for (let i = 0; i < senders.length; i++) {
    let count = messages[i].split(' ').length;
    map.set(senders[i], (map.get(senders[i]) || 0) + count);
  }

  let res = [];
  let max = 0;
  for (const [k, v] of map) {
    if (v > max) {
      max = v;
      res = [k];
    } else if (v === max) {
      res.push(k);
    }
  }

  res.sort();

  return res[res.length - 1];
};
