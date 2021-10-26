class WordsFrequency {
    constructor(book) {
        this.map = new Map();
        for (const item of book) {
            // 计数
            this.map.set(item, (this.map.get(item) || 0) + 1);
        }
    }
    get(word) {
        // 若没出现过，则为0
        return this.map.get(word) || 0;
    }
}
