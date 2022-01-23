class StockPrice {
  constructor() {
    // 当前的时间、价格
    this.time = 0;
    this.price = 0;
    this.timePrice = new Map();
  }
  update(timestamp, price) {
    this.timePrice.set(timestamp, price);
    // 若当前输入的时间大于等于存的时间
    // 说明是新的时间，而不是纠错的时间
    if (this.time <= timestamp) {
      this.time = timestamp;
      this.price = price;
    }
  }
  current() {
    return this.price;
  }
  maximum() {
    let max = 0;
    for (const price of this.timePrice.values()) {
      if (max < price) max = price;
    }
    return max;
  }
  minimum() {
    let min = Infinity;
    for (const price of this.timePrice.values()) {
      if (min > price) min = price;
    }
    return min;
  }
}
