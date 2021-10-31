class MovingAverage {
    constructor(size) {
        this.queue = [];
        this.size = size;
        this.sum = 0;
    }
    next(val) {
        if (this.queue.length >= this.size) {
            this.sum -= this.queue.shift();
        }
        this.queue.push(val);
        this.sum += val;
        const count = this.queue.length;
        return this.sum / count;
    }
}
