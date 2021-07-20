var MyQueue = function () {
    this.in = [];
    this.out = [];
};

MyQueue.prototype.push = function (x) {
    this.in.push(x);
};

MyQueue.prototype.pop = function () {
    if (!this.out.length) {
        while (this.in.length) {
            this.out.push(this.in.pop());
        }
    }
    return this.out.pop();
};

MyQueue.prototype.peek = function () {
    if (!this.out.length) {
        while (this.in.length) {
            this.out.push(this.in.pop());
        }
    }
    return this.out[this.out.length - 1];
};

MyQueue.prototype.empty = function () {
    return this.out.length === 0 && this.in.length === 0;
};
