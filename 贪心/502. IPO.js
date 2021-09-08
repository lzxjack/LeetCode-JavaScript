// 默认最大堆
const defaultCmp = (x, y) => x > y;
// 交换元素
const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
// 堆类，默认最大堆
class Heap {
    constructor(cmp = defaultCmp) {
        this.container = [];
        this.cmp = cmp;
    }
    // 插入
    insert(data) {
        const { container, cmp } = this;
        container.push(data);
        let index = this.size() - 1;
        while (index) {
            let parent = (index - 1) >> 1;
            if (!cmp(container[index], container[parent])) {
                return;
            }
            swap(container, index, parent);
            index = parent;
        }
    }
    // 弹出堆顶，并返回
    pop() {
        const { container, cmp } = this;
        if (!this.size()) {
            return null;
        }

        swap(container, 0, this.size() - 1);
        const res = container.pop();
        const length = this.size();
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
    // 获取堆大小
    size() {
        return this.container.length;
    }
}

const findMaximizedCapital = (k, w, profits, capital) => {
    const n = profits.length;
    const arr = new Array(n);
    // 将资本、利润按项目号组合   [资本,纯利润]
    for (let i = 0; i < n; i++) {
        arr[i] = [capital[i], profits[i]];
    }
    // 将项目按所需资本从小到大排序
    arr.sort((a, b) => a[0] - b[0]);

    // 创建最大堆
    const maxHeap = new Heap();
    let cur = 0;
    for (let i = 0; i < k; i++) {
        while (cur < n && arr[cur][0] <= w) {
            // 将所有满足条件的项目所获得的利润插入堆中
            maxHeap.insert(arr[cur++][1]);
        }
        if (maxHeap.size()) {
            // 堆不为空
            // 取出堆顶，即为最大的纯利润，更新自己的资本w
            w += maxHeap.pop();
        } else {
            // 堆为空，直接退出循环
            // 因为已经没有满足条件的项目进入堆了
            break;
        }
    }
    return w;
};

// 贪心思想：每次投资的项目的纯利润要最大
// 1. 先获得项目数组arr，将资本、利润按项目号组合
// 2. 将项目按所需资本从小到大排序（若从大到小，可能一开始就没法投资了）
// 3. 将所有满足条件的项目所获得的利润插入最大堆中
// 4. 若堆不为空，取出堆顶，即为最大的纯利润，更新自己的资本w
// 5. 若堆为空，直接退出循环，因为当前已经没有满足条件的项目进入堆了
// 6. 重复3~5，一共执行k次
