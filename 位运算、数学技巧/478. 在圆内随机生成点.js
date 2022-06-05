class Solution {
  constructor(radius, x_center, y_center) {
    this.radius = radius;
    this.x = x_center;
    this.y = y_center;
  }
  randPoint() {
    while (1) {
      const X = Math.random() * (2 * this.radius) - this.radius;
      const Y = Math.random() * (2 * this.radius) - this.radius;

      if (X ** 2 + Y ** 2 <= this.radius ** 2) {
        return [this.x + X, this.y + Y];
      }
    }
  }
}
