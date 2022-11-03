var reverse = function (x) {
	const Max = Math.pow(2, 31) - 1;
	const Min = -Math.pow(2, 31);
	let isNega = false;
	if (x < 0) {
		x = -x;
		isNega = true;
	}
	let num = x;
	let length = 0;
	while (num >= 1) {
		num /= 10;
		length++;
	}
	let stack = [];
	for (let i = 0; i < length; i++) {
		let n = Math.floor(x / Math.pow(10, i)) % 10;
		stack.push(n);
	}
	let res = isNega ? parseInt('-' + stack.join('')) : parseInt(stack.join(''));
	return res >= Min && res <= Max ? res : 0;
};

console.log(reverse(-1200));
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(0));
console.log(reverse(999999999999999));
console.log(reverse(-999999999999999));
