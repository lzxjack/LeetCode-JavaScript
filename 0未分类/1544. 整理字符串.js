var makeGood = function (s) {
	const stack = [];
	for (let i = 0; i < s.length; i++) {
		stack.push(s.charAt(i));
		if (stack[stack.length - 2] && stack[stack.length - 2] !== stack[stack.length - 1]) {
			if (
				stack[stack.length - 2].toUpperCase() === stack[stack.length - 1].toUpperCase() ||
				stack[stack.length - 2].toLowerCase() === stack[stack.length - 1].toLowerCase()
			) {
				stack.pop();
				stack.pop();
			}
		}
	}
	return stack.join('');
};

console.log(makeGood('aaaaa'));
