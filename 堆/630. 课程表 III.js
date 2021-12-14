// 交换元素
const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
// 堆类，默认最大堆
class Heap {
    constructor(cmp = (x, y) => x > y) {
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
    // 获取堆顶
    peek() {
        if (this.size()) return this.container[0];
        return null;
    }
}

const scheduleCourse = courses => {
    // 按照最晚完成时间升序排序
    courses.sort((a, b) => a[1] - b[1]);
    // 最大堆
    const maxHeap = new Heap();
    let t = 0;
    for (const course of courses) {
        if (t + course[0] <= course[1]) {
            // 可以完成当前课程，更新t，将课程维持时间加入最大堆
            t += course[0];
            maxHeap.insert(course[0]);
        } else if (maxHeap.size() > 0 && maxHeap.peek() > course[0]) {
            // 当前课程完成不了，且已选课程中持续时间最大的，大于当前课程
            // 用当前课程替换之前课程中，持续时间最大的，并更新t
            t -= maxHeap.peek() - course[0];
            maxHeap.pop();
            maxHeap.insert(course[0]);
        }
    }
    return maxHeap.size();
};
