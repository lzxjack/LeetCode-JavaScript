class Solution {
  constructor(n, blacklist) {
    this.b2w = new Map();
    const m = blacklist.length;
    this.bound = n - m;
    const black = new Set();
    for (const b of blacklist) {
      if (b >= this.bound) {
        black.add(b);
      }
    }

    let w = this.bound;
    for (const b of blacklist) {
      if (b < this.bound) {
        while (black.has(w)) {
          ++w;
        }
        this.b2w.set(b, w);
        ++w;
      }
    }
  }

  pick() {
    const x = Math.floor(Math.random() * this.bound);
    return this.b2w.get(x) || x;
  }
}
