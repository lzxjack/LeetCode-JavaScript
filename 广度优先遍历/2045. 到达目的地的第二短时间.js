const secondMinimum = (n, edges, time, change) => {
  const graph = new Array(n + 1).fill(0).map(() => new Array());
  for (const edge of edges) {
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
  }

  const path = new Array(n + 1).fill(0).map(() => new Array(2).fill(Number.MAX_VALUE));
  path[1][0] = 0;
  const queue = [];
  queue.push([1, 0]);
  while (path[n][1] === Number.MAX_VALUE) {
    const [cur, len] = queue.shift();
    for (const next of graph[cur]) {
      if (len + 1 < path[next][0]) {
        path[next][0] = len + 1;
        queue.push([next, len + 1]);
      } else if (len + 1 > path[next][0] && len + 1 < path[next][1]) {
        path[next][1] = len + 1;
        queue.push([next, len + 1]);
      }
    }
  }

  let ret = 0;
  for (let i = 0; i < path[n][1]; i++) {
    if (ret % (2 * change) >= change) {
      ret = ret + (2 * change - (ret % (2 * change)));
    }
    ret = ret + time;
  }
  return ret;
};
