class SortedStack {
    constructor() {
        // A设计的栈
        this.A = [];
        // B辅助栈
        this.B = [];
    }
    push(val) {
        // 当A不为空，且A栈顶元素小于val时
        // 先将A栈顶放入B
        while (!this.isEmpty() && this.peek() < val) {
            this.B.push(this.A.pop());
        }
        // val放入A
        this.A.push(val);
        // 再将B的值放回来
        while (this.B.length) {
            this.A.push(this.B.pop());
        }
    }
    pop() {
        return this.A.pop();
    }
    peek() {
        return this.A[this.A.length - 1] || -1;
    }
    isEmpty() {
        return !this.A.length;
    }
}
