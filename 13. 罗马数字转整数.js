let romanToInt = function (s) {
	const map = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	let res = 0;
	// 遍历输入的字符串
	for (let i = 0; i < s.length; i++) {
		// 当前对应的值
		let nowVal = map[s[i]];
		// 下一个对应的值
		let nextVal = map[s[i + 1]];
		if (nextVal && nowVal < nextVal) {
			// 如果下一个值比当前值大，说明是特殊情况
			// 累加两个差值
			res += nextVal - nowVal;
			// i自增，跳过下一轮
			i++;
			continue;
		}
		res += nowVal;
	}
	return res;
};

romanToInt('LVIII');

let str = 'abc-de';
let arr1 = str.split('-'); // [ 'abc', 'de' ]
let arr2 = str.split(''); // [ 'a', 'b', 'c', '-', 'd', 'e' ]
console.log(str);
