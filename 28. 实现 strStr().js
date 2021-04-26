// let strStr = function (haystack, needle) {
// 	if (!needle.length) return 0;
// 	if (needle.length > haystack.length) return -1;
// 	const len = needle.length;
// 	let isTrue = false;
// 	for (let i = 0; i < haystack.length; i++) {
// 		if (haystack[i] === needle[0]) {
// 			if (len === 1) return i;
// 			else {
// 				for (let j = 1; j < len; j++) {
// 					if (needle[j] !== haystack[i + j]) {
// 						break;
// 					}
// 					if (j === len - 1) return i;
// 				}
// 			}
// 		}
// 	}
// 	return -1;
// };

let strStr = function (haystack, needle) {
	if (!needle.length) return 0;
	let h = 0;
	let n = 0;
	while (haystack.length && needle.length) {
		if (haystack[h + n] === needle[n]) {
			n++;
		} else {
			h++;
			n = 0;
		}
	}
	return n === needle.length ? h : -1;
};

console.log(strStr('asdfsbvdfb', 'dfb'));
