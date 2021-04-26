let longestCommonPrefix = function (strs) {
	if (strs.length === 0) return '';
	if (strs.length === 1) return strs[0];
	const res = [];
	// 把数组的第一个字符串当做基准，遍历字符，与其他字符串进行比较
	for (let i = 0; i < strs[0].length; i++) {
		// slice(1)将第一个字符串去除
		let flag = strs.slice(1).every(item => item[i] === strs[0][i]);
		// 如果当前其他字符串的当前字符与基准的当前字符相等，将其添加进数组
		if (flag) {
			res.push(strs[0][i]);
		} else {
			break;
		}
	}
	return res.join('');
};
// let strs = ['abc', 'axc'];
// console.log(longestCommonPrefix(strs));

let arr = ['a', 'b', 'c'];
console.log(arr.join('')); // abc
console.log(arr.join('-')); // a-b-c
