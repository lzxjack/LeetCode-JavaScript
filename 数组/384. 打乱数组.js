class Solution {
    constructor(nums) {
        this.nums = nums;
        // 保存原始数组
        this.original = [...this.nums];
    }
    reset() {
        this.nums = [...this.original];
        return this.nums;
    }
    shuffle() {
        const len = this.nums.length;
        for (let i = 0; i < len; i++) {
            // 获取区间[i,len-1]范围内的随机整数j
            const j = i + Math.floor(Math.random() * (this.nums.length - i));
            // 交换位置
            [this.nums[i], this.nums[j]] = [this.nums[j], this.nums[i]];
        }
        return this.nums;
    }
}
