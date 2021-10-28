class MinStack {
    constructor() {
        this.stack = [];
    }
    push(val) {
        // 若栈空，最小值就是val
        // 若栈不为空，最小值是栈顶元素的min属性和val的较小者
        this.stack.push({
            val,
            min: this.stack.length ? Math.min(val, this.getMin()) : val,
        });
    }
    pop() {
        this.stack.pop();
    }
    top() {
        return this.stack[this.stack.length - 1].val;
    }
    getMin() {
        // 返回栈顶元素的min属性
        return this.stack[this.stack.length - 1].min;
    }
}

// 每次push的是一个对象，对象上有两个属性：val和min
// 每次push 相应的min都会改变 ，所以只有栈顶元素的min是最小值
