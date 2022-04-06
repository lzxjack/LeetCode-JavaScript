// 树形数组
class NumArray {
  constructor(nums) {
    this.nums = nums;
    this.tree = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
      this.add(i + 1, nums[i]);
    }
  }
  update(index, val) {
    // 单点修改
    this.add(index + 1, val - this.nums[index]);
    this.nums[index] = val;
  }
  sumRange(left, right) {
    return this.prefixSum(right + 1) - this.prefixSum(left);
  }
  lowBit(x) {
    return x & -x;
  }
  add(index, val) {
    while (index < this.tree.length) {
      this.tree[index] += val;
      index += this.lowBit(index);
    }
  }
  prefixSum(index) {
    // 区间查询
    let sum = 0;
    while (index > 0) {
      sum += this.tree[index];
      index -= this.lowBit(index);
    }
    return sum;
  }
}
