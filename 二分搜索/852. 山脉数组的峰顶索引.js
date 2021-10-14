const peakIndexInMountainArray = arr => {
    let [low, high] = [0, arr.length - 1];
    while (low <= high) {
        const mid = (low + high) >> 1;
        const midItem = arr[mid];
        if (arr[mid - 1] > midItem) {
            // 山脉在前半区
            high = mid - 1;
        } else if (arr[mid + 1] > midItem) {
            // 山脉在后半区
            low = mid + 1;
        } else if (midItem > arr[mid - 1] && midItem > arr[mid + 1]) {
            // midItem比两边大，mid是山脉
            return mid;
        }
    }
};
