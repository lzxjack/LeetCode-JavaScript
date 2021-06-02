const isPalindrome = head => {
    // 先转化为数组
    const arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    // 双指针遍历数组
    let right = arr.length - 1;
    for (let left = 0; left < right; left++) {
        if (arr[left] !== arr[right--]) return false;
    }
    return true;
};
