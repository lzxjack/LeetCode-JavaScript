const LockingTree = function (parent) {
  const n = parent.length;
  this.parent = parent;
  this.lockNodeUser = new Array(n).fill(-1);
  this.children = new Array(n).fill(0).map(() => new Array());
  for (let i = 0; i < n; i++) {
    const p = parent[i];
    if (p != -1) {
      this.children[p].push(i);
    }
  }
};

LockingTree.prototype.lock = function (num, user) {
  if (this.lockNodeUser[num] == -1) {
    this.lockNodeUser[num] = user;
    return true;
  }
  return false;
};

LockingTree.prototype.unlock = function (num, user) {
  if (this.lockNodeUser[num] == user) {
    this.lockNodeUser[num] = -1;
    return true;
  }
  return false;
};

LockingTree.prototype.upgrade = function (num, user) {
  res = this.lockNodeUser[num] == -1 && !this.hasLockedAncestor(num) && this.checkAndUnlockDescendant(num);
  if (res) {
    this.lockNodeUser[num] = user;
  }
  return res;
};

LockingTree.prototype.hasLockedAncestor = function (num) {
  num = this.parent[num];
  while (num != -1) {
    if (this.lockNodeUser[num] != -1) {
      return true;
    } else {
      num = this.parent[num];
    }
  }
  return false;
};

LockingTree.prototype.checkAndUnlockDescendant = function (num) {
  res = this.lockNodeUser[num] != -1;
  this.lockNodeUser[num] = -1;
  for (const child of this.children[num]) {
    res |= this.checkAndUnlockDescendant(child);
  }
  return res;
};
