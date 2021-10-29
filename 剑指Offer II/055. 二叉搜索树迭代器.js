class BSTIterator {
    constructor(root) {
        this.nums = [];
        this.index = 0;
        this.inorder(root, this.nums);
    }
    next() {
        return this.nums[this.index++];
    }
    hasNext() {
        return this.index < this.nums.length;
    }
    inorder(root, nums) {
        if (!root) return;
        this.inorder(root.left, nums);
        nums.push(root.val);
        this.inorder(root.right, nums);
    }
}
