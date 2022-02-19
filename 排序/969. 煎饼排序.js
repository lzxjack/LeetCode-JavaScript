const pancakeSort = arr => {
  const ret = [];
  for (let n = arr.length; n > 1; n--) {
    let index = 0;
    for (let i = 1; i < n; i++) {
      if (arr[i] >= arr[index]) {
        index = i;
      }
    }
    reverse(arr, index);
    reverse(arr, n - 1);
    ret.push(index + 1, n);
  }
  return ret;
};

// 翻转数组[0,end]区间
const reverse = (arr, end) => {
  let [left, right] = [0, end];
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
};
