// 仅适合本题的最小堆
class MinHeap {
    constructor() {
        this.heap = [];
    }
    // 交换节点位置
    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    }
    // 获得父节点
    getParentIndex(i) {
        return (i - 1) >> 1;
    }
    // 获得左节点
    getleftIndex(i) {
        return 2 * i + 1;
    }
    // 获得右节点
    getrightIndex(i) {
        return 2 * i + 2;
    }
    // 上移
    shiftUp(index) {
        if (index === 0) return;
        const parentIndex = this.getParentIndex(index);
        if (this.heap[parentIndex] && this.heap[parentIndex].count > this.heap[index].count) {
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }
    }
    // 下移
    shiftDown(index) {
        const leftIndex = this.getleftIndex(index);
        const rightIndex = this.getrightIndex(index);
        if (this.heap[leftIndex] && this.heap[leftIndex].count < this.heap[index].count) {
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        if (this.heap[rightIndex] && this.heap[rightIndex].count < this.heap[index].count) {
            this.swap(rightIndex, index);
            this.shiftDown(rightIndex);
        }
    }
    // 插入
    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }
    // 删除堆顶
    pop() {
        // pop()方法删除数组最后一个元素并返回，赋值给堆顶
        this.heap[0] = this.heap.pop();
        // 对堆顶重新排序
        this.shiftDown(0);
    }
    // 获取堆顶
    peek() {
        return this.heap[0];
    }
    // 获取堆的大小
    size() {
        return this.heap.length;
    }
}

const topKFrequent = (nums, k) => {
    // 创建Map，统计每个数出现的次数
    const map = new Map();
    nums.forEach(num => {
        map.set(num, (map.get(num) || 0) + 1);
    });
    // 创建最小堆
    const minHeap = new MinHeap();
    // 遍历map，将{num, count}入堆
    // 若堆元素大于k，堆顶弹出
    for (const [num, count] of map) {
        minHeap.insert({ num, count });
        if (minHeap.size() > k) minHeap.pop();
    }
    // 因为堆中存的是对象，提取出num属性
    return minHeap.heap.map(item => item.num);
};
