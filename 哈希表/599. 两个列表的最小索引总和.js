const findRestaurant = (list1, list2) => {
  const map = new Map();

  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }

  let res = [];
  let minIndex = Infinity;

  for (let i = 0; i < list2.length; i++) {
    if (map.has(list2[i])) {
      if (i + map.get(list2[i]) < minIndex) {
        res = [list2[i]];
        minIndex = i + map.get(list2[i]);
      } else if (i + map.get(list2[i]) === minIndex) {
        res.push(list2[i]);
      }
    }
  }

  return res;
};
