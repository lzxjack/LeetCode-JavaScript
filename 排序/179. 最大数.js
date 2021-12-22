const largestNumber = nums => {
    const res = nums.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
    return res.startsWidth('0') ? '0' : res;
};
