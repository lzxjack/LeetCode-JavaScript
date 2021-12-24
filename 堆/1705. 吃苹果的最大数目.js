/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */

class Heap {
    constructor(cmp = (a, b) => a > b) {
        this.data = [];
        this.size = 0;
        this.cmp = cmp;
    }

    eat(day) {
        if (this.size === 0) return false;
        while (this.size && (this.top()[0] < day || this.top()[1] === 0)) {
            this.pop();
        }
        // 吃一个
        if (this.size) {
            this.top()[1]--;
            return true;
        }
        return false;
    }

    top() {
        return this.size === 0 ? null : this.data[0];
    }

    add(val) {
        this.data.push(val);
        this._shifUp(this.size++);
    }

    pop() {
        if (this.size === 0) {
            return null;
        }
        this._swap(0, --this.size);
        this._shifDown(0);
        return this.data.pop();
    }

    _parent(index) {
        return (index - 1) >> 1;
    }

    _child(index) {
        return (index << 1) + 1;
    }

    _shifDown(index) {
        while (this._child(index) < this.size) {
            let child = this._child(index);
            if (child + 1 < this.size && this.cmp(this.data[child + 1], this.data[child])) {
                child = child + 1;
            }
            if (this.cmp(this.data[index], this.data[child])) {
                break;
            }
            this._swap(index, child);
            index = child;
        }
    }

    _shifUp(index) {
        while (
            this._parent(index) >= 0 &&
            this.cmp(this.data[index], this.data[this._parent(index)])
        ) {
            this._swap(index, this._parent(index));
            index = this._parent(index);
        }
    }

    _swap(a, b) {
        [this.data[a], this.data[b]] = [this.data[b], this.data[a]];
    }
}
const eatenApples = (apples, days) => {
    const minHeap = new Heap((a, b) => a[0] < b[0]);
    let ans = 0,
        day = 0;
    const allDays = apples.length;
    while (day < allDays) {
        if (apples[day]) minHeap.add([days[day] + day - 1, apples[day]]);
        if (minHeap.eat(day++)) ans++;
    }
    while (minHeap.eat(day++)) ans++;
    return ans;
};
