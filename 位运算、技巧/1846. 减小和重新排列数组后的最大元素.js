const maximumElementAfterDecrementingAndRearranging = arr => {
    arr.sort((a, b) => a - b);
    arr[0] = 1;
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        arr[i] = Math.min(arr[i], arr[i - 1] + 1);
    }
    return arr[len - 1];
};
