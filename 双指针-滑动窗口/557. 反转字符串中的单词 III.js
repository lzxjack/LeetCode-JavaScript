const reverseWords = s => {
    const arr = s.split(' ');
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i].split('').reverse().join(''));
    }
    return res.join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"));
