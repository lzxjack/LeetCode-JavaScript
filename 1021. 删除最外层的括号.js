var removeOuterParentheses = function (S) {
	const stack = [];
	const res = [];
	for (let i of S) {
		if (stack.length === 0 && i === '(') {
			stack.push(i);
		} else if (stack.length && i === '(') {
			stack.push(i);
			res.push(i);
		} else if (stack.length > 1 && i === ')') {
			stack.pop();
			res.push(i);
		} else if (stack.length === 1 && i === ')') {
			stack.pop();
		}
	}
	return res.join('');
};
