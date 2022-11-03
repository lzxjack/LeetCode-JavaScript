let isPalindrome = function (x) {
	if (x < 0) return false;
	let num = x;
	let length = 0;
	while (num >= 1) {
		num /= 10;
		length++;
	}
	// console.log('length', length);
	let count = length % 2 === 0 ? length / 2 : (length - 1) / 2;
	// console.log('count', count);
	for (let i = 0; i < count; i++) {
		let font = Math.floor(x / Math.pow(10, length - 1 - i)) % 10;
		let after = Math.floor(x / Math.pow(10, i)) % 10;

		// console.log('font', font);
		// console.log('after', after);

		if (font !== after) return false;
	}
	return true;
};

const num = 1234;
// 个位
let g = Math.floor(num / Math.pow(10, 0)) % 10;
// 十位
let s = Math.floor(num / Math.pow(10, 1)) % 10;
// 百位
let b = Math.floor(num / Math.pow(10, 2)) % 10;
// 千位
let q = Math.floor(num / Math.pow(10, 3)) % 10;
console.log(g, s, b, q); // 4 3 2 1
