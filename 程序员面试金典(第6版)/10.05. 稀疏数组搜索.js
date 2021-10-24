const findString = (words, s) => {
    let [low, high] = [0, words.length - 1];
    while (low <= high) {
        let mid = (low + high) >> 1;
        while (mid > low && words[mid] === '') mid--;
        if (words[mid] > s) {
            high = mid - 1;
        } else if (words[mid] < s) {
            low = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
};
