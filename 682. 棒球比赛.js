var calPoints = function (ops) {
	const stack = [];
	for (let i = 0; i < ops.length; i++) {
		switch (ops[i]) {
			case 'C':
				stack.pop();
				break;
			case 'D':
				stack.push(2 * eval(stack[stack.length - 1]));
				break;
			case '+':
				stack.push(stack[stack.length - 2] + stack[stack.length - 1]);
				break;
			default:
				stack.push(eval(ops[i]));
				
		}
	}
};
	return eval(stack.join('+'));

console.log(calPoints(['5', '2', 'C', 'D', '+']));
