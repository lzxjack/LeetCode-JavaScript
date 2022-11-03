// 11111111
// var buildArray = function (target, n) {
// 	const arr = [];
// 	for (let i = 0; i < target.length; i++) {
// 		let x = i === 0 ? 0 : target[i - 1];
// 		for (let j = 0; j < target[i] - x - 1; j++) {
// 			arr.push('Push');
// 			arr.push('Pop');
// 		}
// 		arr.push('Push');
// 	}
// 	return arr;
// };

// [...,x ,y,...]  (y-x-1)*(push pop)+push

// 2222
var buildArray = function (target, n) {
	const list = [];
	const res = [];
	for (let i = 1; i <= n; i++) list.push(i);
	for (let i = 0; i < target[target.length - 1]; i++) {
		if (target.indexOf(list[i]) === -1) {
			res.push('Push');
			res.push('Pop');
		} else {
			res.push('Push');
		}
	}
	return res;
};

console.log(buildArray([1, 6], 7));
