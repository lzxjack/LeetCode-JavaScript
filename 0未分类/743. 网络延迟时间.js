const networkDelayTime = (times, n, k) => {
    const INF = Number.MAX_SAFE_INTEGER;
    const g = new Array(n).fill(INF).map(() => new Array(n).fill(INF));
    for (const t of times) {
        const x = t[0] - 1,
            y = t[1] - 1;
        g[x][y] = t[2];
    }

    const dist = new Array(n).fill(INF);
    dist[k - 1] = 0;
    const used = new Array(n).fill(false);
    for (let i = 0; i < n; ++i) {
        let x = -1;
        for (let y = 0; y < n; ++y) {
            if (!used[y] && (x === -1 || dist[y] < dist[x])) {
                x = y;
            }
        }
        used[x] = true;
        for (let y = 0; y < n; ++y) {
            dist[y] = Math.min(dist[y], dist[x] + g[x][y]);
        }
    }

    let ans = Math.max(...dist);
    return ans === INF ? -1 : ans;
};
