// 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 示例 1:

// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
// 示例 2:

// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4
// 说明:

// 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

class MinHeap {
    constructor() {
        this.heap = [];
    };
    // 交换节点位置
    swap(i1, i2) {
        const temp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = temp;
    };
    // 获得父节点
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    };
    // 获得左节点
    getleftIndex(i) {
        return 2 * i + 1;
    };
    // 获得右节点
    getrightIndex(i) {
        return 2 * i + 2;
    };
    // 上移
    shiftUp(index) {
        if (index === 0) { return; }
        const parentIndex = this.getParentIndex(index);
        if (this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }
    };
    // 下移
    shiftDown(index) {
        // if (index === this.heap.length - 1) { return; }
        const leftIndex = this.getleftIndex(index);
        const rightIndex = this.getrightIndex(index);
        if (this.heap[leftIndex] < this.heap[index]) {
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        if (this.heap[rightIndex] < this.heap[index]) {
            this.swap(rightIndex, index);
            this.shiftDown(rightIndex);
        }
    };
    // 插入
    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    };
    // 删除堆顶
    pop() {
        // pop()方法删除数组最后一个元素并返回，赋值给堆顶
        this.heap[0] = this.heap.pop();
        // 对堆顶重新排序
        this.shiftDown(0);
    };
    // 获取堆顶
    peek() {
        return this.heap[0];
    };
    // 获取堆的大小
    size() {
        return this.heap.length;
    }
}

var findKthLargest = function(nums, k) {
    // 创建最小堆
    const h = new MinHeap();
    // 遍历数组，将数组元素依次插入堆中
    nums.forEach(n => {
        h.insert(n);
        // 如果堆大小超过k， 开始裁员， 将堆顶(最小) 的去掉
        if (h.size() > k) {
            h.pop();
        }
    });
    // 返回堆顶
    return h.peek();
};