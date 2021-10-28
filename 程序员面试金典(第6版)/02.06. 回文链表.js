// 转化为数组，用双指针
// 空间不符合要求，需改进！

const isPalindrome = head => {
    const arr = [];
    let p = head;
    while (p) {
        arr.push(p.val);
        p = p.next;
    }
    let [left, right] = [0, arr.length - 1];
    while (left < right) {
        if (arr[left] !== arr[right]) return false;
        left++;
        right--;
    }
    return true;
};
