var removeDuplicates = function (S) {
	const stack = [];
	for (let i = 0; i < S.length; i++) {
		stack[stack.length - 1] && stack[stack.length - 1] === S.charAt(i)
			? stack.pop()
			: stack.push(S.charAt(i));
	}
	return stack.join('');
};
