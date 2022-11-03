class MyCalendarThree {
  constructor() {
    this.map = new Map();
  }
  book(start, end) {
    let cur = 0;
    let ans = 0;

    this.map.set(start, (this.map.get(start) || 0) + 1);
    this.map.set(end, (this.map.get(end) || 0) - 1);

    const arr = Array.from(this.map).sort((a, b) => {
      return a[0] - b[0];
    });

    for (const [key, value] of arr) {
      cur += value;

      if (cur > ans) {
        ans = cur;
      }
    }

    return ans;
  }
}
