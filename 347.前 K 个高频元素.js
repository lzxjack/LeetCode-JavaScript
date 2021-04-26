// 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]

// 输入: nums = [1], k = 1
// 输出: [1]

// 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
// 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
// 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
// 你可以按任意顺序返回答案。

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
        if (this.heap[parentIndex] && this.heap[parentIndex].value > this.heap[index].value) {
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }
    };
    // 下移
    shiftDown(index) {
        // if (index === this.heap.length - 1) { return; }
        const leftIndex = this.getleftIndex(index);
        const rightIndex = this.getrightIndex(index);
        if (this.heap[leftIndex] && this.heap[leftIndex].value < this.heap[index].value) {
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        if (this.heap[rightIndex] && this.heap[rightIndex].value < this.heap[index].value) {
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

var topKFrequent = function(nums, k) {
    const map = new Map();
    nums.forEach(n => {
        map.set(n, map.has(n) ? map.get(n) + 1 : 1);
    });
    const h = new MinHeap();
    map.forEach((value, key) => {
        h.insert({ value, key });
        if (h.size() > k) {
            h.pop();
        }
    });
    return h.heap.map(a => a.key);
};