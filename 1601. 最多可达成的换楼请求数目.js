const maximumRequests = (n, requests) => {
  let len = requests.length,
    test = [],
    res = 0;
  function is_fit(arr) {
    //判定是否可行
    let hash = [];
    for (let i = 0; i < n; i++) hash[i] = 0;
    for (let i = 0; i < arr.length; i++) {
      let x = arr[i][0],
        y = arr[i][1];
      hash[x]++, hash[y]--;
    }
    for (let i = 0; i < n; i++) {
      if (hash[i] != 0) return false;
    }
    return true;
  }
  function dfs(test, requests, i) {
    if (i < len) {
      test.push(requests[i]);
      if (is_fit(test)) res = Math.max(res, test.length);
      dfs(test, requests, i + 1);
      test.pop();
      dfs(test, requests, i + 1);
    }
  }
  dfs(test, requests, 0);
  return res;
};
