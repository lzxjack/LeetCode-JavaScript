const peakIndexInMountainArray = arr => {
    let [low, high] = [0, arr.length - 1];
    while (low <= high) {
        const mid = (low + high) >> 1;
        const midItem = arr[mid];
        if (arr[mid - 1] > midItem) {
            // 山脉在左侧
            high = mid - 1;
        } else if (arr[mid + 1] > midItem) {
            // 山脉在右侧
            low = mid + 1;
        } else if (midItem > arr[mid - 1] && midItem > arr[mid + 1]) {
            return mid;
        }
    }
};
