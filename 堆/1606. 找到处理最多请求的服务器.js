const busiestServers = (k, arrival, load) => {
  const used = new PriorityQueue(),
    available = new PriorityQueue((a, b) => a < b),
    cnts = new Array(k).fill(0);
  for (let i = 0; i < k; i++) available.offer(i);
  for (let i = 0; i < arrival.length; i++) {
    const arr = arrival[i],
      duration = load[i];
    while (used.size > 0 && used.peek()[0] <= arr) {
      const cur = used.poll();
      available.offer(i + ((((cur[1] - i) % k) + k) % k));
    }
    if (available.size > 0) {
      const idx = available.poll() % k;
      cnts[idx]++;
      used.offer([arr + duration, idx]);
    }
  }
  let m = 0,
    ans = new Array();
  for (let i = 0; i < k; i++) {
    if (cnts[i] > m) {
      m = cnts[i];
      ans = [i];
    } else if (cnts[i] == m) {
      ans.push(i);
    }
  }
  return ans;
};

class PriorityQueue {
  constructor(compare = (a, b) => a[0] < b[0]) {
    this.data = [];
    this.size = 0;
    this.compare = compare;
  }

  peek() {
    return this.size === 0 ? null : this.data[0];
  }

  offer(val) {
    this.data.push(val);
    this._shifUp(this.size++);
  }

  poll() {
    if (this.size === 0) {
      return null;
    }
    this._swap(0, --this.size);
    this._shifDown(0);
    return this.data.pop();
  }

  _parent(index) {
    return (index - 1) >> 1;
  }

  _child(index) {
    return (index << 1) + 1;
  }

  _shifDown(index) {
    while (this._child(index) < this.size) {
      let child = this._child(index);
      if (child + 1 < this.size && this.compare(this.data[child + 1], this.data[child])) {
        child = child + 1;
      }
      if (this.compare(this.data[index], this.data[child])) {
        break;
      }
      this._swap(index, child);
      index = child;
    }
  }

  _shifUp(index) {
    while (
      this._parent(index) >= 0 &&
      this.compare(this.data[index], this.data[this._parent(index)])
    ) {
      this._swap(index, this._parent(index));
      index = this._parent(index);
    }
  }

  _swap(a, b) {
    [this.data[a], this.data[b]] = [this.data[b], this.data[a]];
  }
}
