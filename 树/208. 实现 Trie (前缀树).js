class Trie {
    constructor() {
        // 初始化对象
        this.children = {};
    }
    insert(word) {
        let nodes = this.children;
        for (const char of word) {
            // 若没当前字母属性，新建一个
            if (!nodes[char]) nodes[char] = {};
            // 下移到当前字母的位置上
            nodes = nodes[char];
        }
        // 单词插入完毕，标记结束
        nodes.isEnd = true;
    }
    searchPrefix(prefix) {
        let nodes = this.children;
        // 遍历前缀
        for (const char of prefix) {
            // 若没有当前字母的属性，表明树上没这个前缀，返回false
            if (!nodes[char]) return false;
            // 下移到当前字母的位置上
            nodes = nodes[char];
        }
        // 最后返回当前的位置
        return nodes;
    }
    search(word) {
        // 先查找有无word前缀
        const nodes = this.searchPrefix(word);
        // 树上有这个单词的条件：存在这个单词的前缀，且标记了end结束
        return !!nodes && !!nodes.isEnd;
    }
    startsWith(prefix) {
        // 直接查找前缀即可
        return !!this.searchPrefix(prefix);
    }
}
