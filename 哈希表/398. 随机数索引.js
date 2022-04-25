class Solution {
  constructor(nums) {
    this.map = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (!this.map.has(nums[i])) {
        this.map.set(nums[i], []);
      }
      this.map.get(nums[i]).push(i);
    }
  }
  pick(target) {
    const temp = this.map.get(target);
    return temp[Math.floor(Math.random() * temp.length)];
  }
}
