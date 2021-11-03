const trapRainWater = heightMap => {
    const m = heightMap.length,
        n = heightMap[0].length;
    let ans = 0;
    if (m < 3 || n < 3) return ans;

    const heap = new Heap((el1, el2) => el1[2] - el2[2]);
    const visited = Array.from({ length: m }, () => new Array(n));
    for (let i = 0; i < m; ++i) {
        if (i === 0 || i === m - 1) {
            for (let j = 0; j < n; ++j) {
                heap.add([i, j, heightMap[i][j]]);
                visited[i][j] = true;
            }
        } else {
            heap.add([i, 0, heightMap[i][0]]);
            visited[i][0] = true;
            heap.add([i, n - 1, heightMap[i][n - 1]]);
            visited[i][n - 1] = true;
        }
    }

    while (heap.size()) {
        const [i, j, height] = heap.pop();
        if (i - 1 >= 0 && !visited[i - 1][j]) {
            ans += compareNearby(heap, i - 1, j, heightMap, visited, height);
        }
        if (i + 1 < m && !visited[i + 1][j]) {
            ans += compareNearby(heap, i + 1, j, heightMap, visited, height);
        }
        if (j - 1 >= 0 && !visited[i][j - 1]) {
            ans += compareNearby(heap, i, j - 1, heightMap, visited, height);
        }
        if (j + 1 < n && !visited[i][j + 1]) {
            ans += compareNearby(heap, i, j + 1, heightMap, visited, height);
        }
    }

    return ans;

    function compareNearby(heap, i, j, heightMap, visited, prevHeight) {
        visited[i][j] = true;
        const height = heightMap[i][j];
        const heightDiff = prevHeight - height;
        if (heightDiff > 0) {
            heap.add([i, j, prevHeight]);
            return heightDiff;
        } else {
            heap.add([i, j, height]);
            return 0;
        }
    }
};

class Heap {
    constructor(compare) {
        this._elements = [];
        this._compare = compare;
    }
    size() {
        return this._elements.length;
    }
    add(el) {
        let els = this._elements;
        els.push(el);
        this.shiftUp(els.length - 1);
    }
    pop() {
        let els = this._elements;
        if (els.length === 1) return els.shift();
        const peak = els[0];
        els[0] = els.pop();
        this.shiftDown(0);
        return peak;
    }
    shiftDown(parent) {
        let els = this._elements,
            compare = this._compare;
        while (0 <= parent && parent < els.length) {
            let child1 = parent * 2 + 1;
            if (child1 >= els.length) return;
            let child2 = child1 + 1;
            if (child2 < els.length && compare(els[child2], els[child1]) < 0) child1 = child2;
            if (compare(els[parent], els[child1]) < 0) return;
            [els[parent], els[child1]] = [els[child1], els[parent]];
            parent = child1;
        }
    }
    shiftUp(child) {
        let els = this._elements,
            compare = this._compare;
        while (0 <= child && child < els.length) {
            let parent = Math.floor((child - 1) / 2);
            if (parent < 0) return;
            if (compare(els[parent], els[child]) < 0) return;
            [els[parent], els[child]] = [els[child], els[parent]];
            child = parent;
        }
    }
}
