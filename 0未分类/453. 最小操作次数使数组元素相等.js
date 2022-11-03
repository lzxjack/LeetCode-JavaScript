const minMoves = nums => {
    const min = Math.min(...nums);
    let res = 0;
    for (const num of nums) {
        res += num - min;
    }
    return res;
};
