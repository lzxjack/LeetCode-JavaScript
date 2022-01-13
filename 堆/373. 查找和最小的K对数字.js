class MaxHeap {
    constructor() {
        this.heap = [];
    }
    get size() {
        return this.heap.length;
    }
    insert(value) {
        this.heap.push(value);
        this.up(this.size - 1);
    }
    pop() {
        if (this.size === 1) return this.heap.pop();
        this.heap[0] = this.heap.pop();
        this.down(0);
    }
    peek = () => this.heap[0];
    up(index) {
        if (index === 0) return;
        const parentIndex = (index - 1) >> 1;
        if (this.heap[parentIndex] && this.heap[parentIndex]['total'] < this.heap[index]['total']) {
            this.swap(parentIndex, index);
            this.up(parentIndex);
        }
    }
    down(index) {
        const leftIndex = index * 2 + 1;
        const rightIndex = index * 2 + 2;
        if (this.heap[leftIndex] && this.heap[leftIndex]['total'] > this.heap[index]['total']) {
            this.swap(leftIndex, index);
            this.down(leftIndex);
        }
        if (this.heap[rightIndex] && this.heap[rightIndex]['total'] > this.heap[index]['total']) {
            this.swap(rightIndex, index);
            this.down(rightIndex);
        }
    }
    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    }
}

const kSmallestPairs = (nums1, nums2, k) => {
    const [len1, len2, heap] = [nums1.length, nums2.length, new MaxHeap()];
    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            const data = [nums1[i], nums2[j]];
            const total = data[0] + data[1];
            heap.insert({ total, data });
            if (heap.size > k) heap.pop();
            if (heap.size === k && total >= heap.peek().total) break;
        }
        if (heap.size === k && nums1[i] + nums2[0] >= heap.peek().total) break;
    }
    return heap.heap.map(v => v.data);
};
