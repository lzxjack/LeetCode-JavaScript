class MapSum {
    constructor() {
        this.map = new Map();
    }
    insert(key, val) {
        this.map.set(key, val);
    }
    sum(prefix) {
        let sum = 0;
        for (const [key, val] of this.map) {
            if (key.indexOf(prefix) === 0) {
                sum += val;
            }
        }
        return sum;
    }
}
