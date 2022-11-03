var minOperations = function (logs) {
	const stack = [];
	for (let i = 0; i < logs.length; i++) {
		if (logs[i].indexOf('../') >= 0) {
			stack.pop();
		} else if (
			logs[i].indexOf('../') < 0 &&
			logs[i].indexOf('./') >= 0
		) {
			stack.push(1);
			stack.pop();
		} else {
			stack.push(1);
		}
	}
	return stack.length;
};
console.log(minOperations(['d1/', '../', '../', '../']));
