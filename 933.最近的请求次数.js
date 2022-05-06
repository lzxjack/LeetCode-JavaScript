class RecentCounter {
  constructor() {
    this.q = [];
  }
  ping(t) {
    this.q.push(t);
    while (this.q[0] < t - 3000) {
      this.q.shift();
    }
    return this.q.length;
  }
}
