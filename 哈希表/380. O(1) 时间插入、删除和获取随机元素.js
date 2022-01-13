class RandomizedSet {
    constructor() {
        this.set = new Set();
    }
    insert(val) {
        if (this.set.has(val)) return false;
        this.set.add(val);
        return true;
    }
    remove(val) {
        if (!this.set.has(val)) return false;
        this.set.delete(val);
        return true;
    }
    getRandom() {
        const index = Math.floor(Math.random() * this.set.size);
        return [...this.set][index];
    }
}
