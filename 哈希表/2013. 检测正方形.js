class DetectSquares {
  constructor() {
    // 行
    this.cnt = new Map();
  }
  add(point) {
    const [x, y] = point;
    if (!this.cnt.has(y)) {
      this.cnt.set(y, new Map());
    }
    const yCnt = this.cnt.get(y);
    // 统计该点的个数
    yCnt.set(x, (yCnt.get(x) || 0) + 1);
  }
  count(point) {
    let res = 0;
    const [x, y] = point;
    // 统一纵坐标不存在，则肯定没有正方形
    if (!this.cnt.has(y)) return 0;
    const yCnt = this.cnt.get(y);
    for (const [col, colCnt] of this.cnt.entries()) {
      if (col !== y) {
        const d = col - y;
        res += (colCnt.get(x) || 0) * (yCnt.get(x + d) || 0) * (colCnt.get(x + d) || 0);
        res += (colCnt.get(x) || 0) * (yCnt.get(x - d) || 0) * (colCnt.get(x - d) || 0);
      }
    }
    return res;
  }
}
