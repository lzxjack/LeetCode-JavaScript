class Solution {
    constructor(m, n) {
        this.set = new Set();
        this.m = m;
        this.n = n;
        this.len = m * n;
    }
    flip() {
        // 选出随机数
        let num = Math.floor(Math.random() * this.len);
        while (this.set.has(num)) num = Math.floor(Math.random() * this.len);
        this.set.add(num);
        // 转化为二维坐标
        const row = Math.floor(num / this.n);
        const col = num % this.n;
        return [row, col];
    }
    reset() {
        // 重新创建set
        this.set = new Set();
    }
}
