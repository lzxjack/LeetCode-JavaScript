class MinStack {
	constructor() {
		this.stack = [];
	}
	push(x) {
		this.stack.push({
			val: x,
			min: this.stack.length ? Math.min(x, this.getMin()) : x,
		});
	}
	pop() {
		this.stack.pop();
	}
	top() {
		return this.stack[this.stack.length - 1].val;
	}
	getMin() {
		return this.stack[this.stack.length - 1].min;
	}
}

// 每次push的是一个对象，对象上有两个属性：val和min
// 每次push 相应的min都会改变 ，所以只有栈顶元素的min是最小值
