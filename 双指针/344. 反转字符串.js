const reverseString = s => {
    const len = s.length;
    let left = 0,
        right = len - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
};
