class MyQueue {
	constructor() {
		this.queue = [];
	}
	push(item) {
		// 入队
		this.queue.push(item);
	}
	pop() {
		// 出队
		return this.queue.shift();
	}
	peek() {
		// 获得队头元素
		return this.queue[0];
	}
	empty() {
		// 判断队列是否为空
		return this.queue.length === 0;
	}
}
