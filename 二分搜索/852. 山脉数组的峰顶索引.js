const peakIndexInMountainArray = arr => {
    let low = 0,
        high = arr.length - 1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (arr[mid - 1] > arr[mid]) {
            high = mid - 1;
        } else if (arr[mid + 1] > arr[mid]) {
            low = mid + 1;
        } else if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return mid;
        }
    }
};
