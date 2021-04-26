class MyStack {
	constructor() {
		this.stack = [];
	}
	push(item) {
		// 入栈
		this.stack.push(item);
	}
	pop() {
		// 出栈
		return this.stack.pop();
	}
	getCount() {
		// 获取栈大小
		return this.stack.length;
	}
	top() {
		// 获取栈顶元素
		return this.stack[this.getCount() - 1];
	}
	empty() {
		// 判断是否为空栈
		return this.stack.length === 0;
	}
}
