var reversePrint = function (head) {
    const array = [];
    while (head) {
        array.unshift(head.val);
        head = head.next;
    }
    return array;
};
