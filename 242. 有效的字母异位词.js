let isAnagram = function (s, t) {
	if (s.length !== t.length) return false;
	return [...s].sort().join('') === [...t].sort().join('');
};

console.log(isAnagram('rat', 'car'));
