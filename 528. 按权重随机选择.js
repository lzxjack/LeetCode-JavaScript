class Solution {
    constructor(w) {
        this.len = w.length;
        // 定义前缀和数组
        this.pre = new Array(this.len).fill(0);
        this.pre[0] = w[0];
        // 从i=1开始，求每个位置的前缀和
        for (let i = 1; i < this.len; i++) {
            this.pre[i] = this.pre[i - 1] + w[i];
        }
        console.log(this.pre);
        // 总和
        this.total = this.pre[this.len - 1];
    }
    pickIndex() {
        // Math.random()返回 0 ~ 1 之间的一个随机数
        // x 是 1 ~ total 之间的一个随机整数
        const x = Math.floor(Math.random() * this.total) + 1;
        // 二分查找
        let [low, high] = [0, this.len - 1];
        while (low <= high) {
            const mid = (low + high) >> 1;
            if (this.pre[mid] < x) low = mid + 1;
            else high = mid - 1;
        }
        return low;
    }
}
