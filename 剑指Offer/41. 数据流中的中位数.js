const MedianFinder = function () {
    const defaultCmp = (x, y) => x > y; // 默认是最大堆
    const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
    class Heap {
        constructor(cmp = defaultCmp) {
            this.container = [];
            this.cmp = cmp;
        }

        insert(data) {
            const { container, cmp } = this;

            container.push(data);
            let index = container.length - 1;
            while (index) {
                let parent = Math.floor((index - 1) / 2);
                if (!cmp(container[index], container[parent])) {
                    return;
                }
                swap(container, index, parent);
                index = parent;
            }
        }

        pop() {
            const { container, cmp } = this;
            if (!container.length) {
                return null;
            }

            swap(container, 0, container.length - 1);
            const res = container.pop();
            const length = container.length;
            let index = 0,
                exchange = index * 2 + 1;

            while (exchange < length) {
                // // 以最大堆的情况来说：如果有右节点，并且右节点的值大于左节点的值
                let right = index * 2 + 2;
                if (right < length && cmp(container[right], container[exchange])) {
                    exchange = right;
                }
                if (!cmp(container[exchange], container[index])) {
                    break;
                }
                swap(container, exchange, index);
                index = exchange;
                exchange = index * 2 + 1;
            }

            return res;
        }

        peek() {
            if (this.container.length) return this.container[0];
            return null;
        }
    }
    this.A = new Heap();
    this.B = new Heap((x, y) => x < y);
};

MedianFinder.prototype.addNum = function (num) {
    this.A.insert(num);
    this.B.insert(this.A.peek());
    this.A.pop();
    if (this.A.container.length < this.B.container.length) {
        this.A.insert(this.B.peek());
        this.B.pop();
    }
};

MedianFinder.prototype.findMedian = function () {
    if (this.A.container.length !== this.B.container.length) {
        return this.A.peek();
    } else {
        return (this.A.peek() + this.B.peek()) / 2;
    }
};
