var MyHashMap = function () {
    this.map = [];
};

MyHashMap.prototype.put = function (key, value) {
    const len = this.map.length;
    for (let i = 0; i < len; i++) {
        if (this.map[i][0] === key) {
            this.map[i][1] = value;
            return;
        }
    }
    this.map.push([key, value]);
};

MyHashMap.prototype.get = function (key) {
    const len = this.map.length;
    for (let i = 0; i < len; i++) {
        if (this.map[i][0] === key) {
            return this.map[i][1];
        }
    }
    return -1;
};

MyHashMap.prototype.remove = function (key) {
    const newMap = this.map.filter(item => item[0] !== key);
    this.map = newMap;
};
