class MyQueue {
    constructor() {
        this.A = [];
        this.B = [];
    }
    push(x) {
        this.A.push(x);
    }
    pop() {
        while (this.A.length) this.B.push(this.A.pop());
        const res = this.B.pop();
        while (this.B.length) this.A.push(this.B.pop());
        return res;
    }
    peek() {
        return this.A[0];
    }
    empty() {
        return !this.A.length;
    }
}
