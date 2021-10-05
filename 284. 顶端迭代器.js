var PeekingIterator = function (iterator) {
    this.arr = [];
    while (iterator.hasNext()) this.arr.push(iterator.next());
    this.index = -1;
};

PeekingIterator.prototype.peek = function () {
    return this.arr[this.index + 1];
};

PeekingIterator.prototype.next = function () {
    return this.arr[++this.index];
};

PeekingIterator.prototype.hasNext = function () {
    return !!this.arr[this.index + 1];
};
