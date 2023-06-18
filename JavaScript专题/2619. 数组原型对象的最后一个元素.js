Array.prototype.last = function () {
  if (!this.length || !this) return -1;
  return this[this.length - 1];
};
