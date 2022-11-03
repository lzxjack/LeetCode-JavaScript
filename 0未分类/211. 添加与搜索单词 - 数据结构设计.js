// 字典树
class TrieNode {
    constructor() {
        this.children = new Array(26).fill(0);
        this.isEnd = false;
    }
    insert(word) {
        let node = this;
        for (let i = 0; i < word.length; i++) {
            const ch = word[i];
            // 计算当前字符的索引
            const index = ch.charCodeAt() - 'a'.charCodeAt();
            // 若索引位置还没有单词，则在此新建字典树
            if (node.children[index] === 0) node.children[index] = new TrieNode();
            node = node.children[index];
        }
        // 结尾标记单词结束了
        node.isEnd = true;
    }
    getChildren() {
        return this.children;
    }
    isEnd() {
        return this.isEnd;
    }
}

class WordDictionary {
    constructor() {
        this.trieRoot = new TrieNode();
    }
    addWord(word) {
        this.trieRoot.insert(word);
    }
    search(word) {
        const dfs = (index, node) => {
            // 若索引长度等于单词数，说明遍历完了，返回isEnd
            if (index === word.length) return node.isEnd;

            const ch = word[index];
            if (ch !== '.') {
                // 当前字符是字母，必须保证一致
                const child = node.children[ch.charCodeAt() - 'a'.charCodeAt()];
                if (child && dfs(index + 1, child)) return true;
            } else {
                // 当前字符是点，点可以代表任何字符
                // 只要有一个子节点是true即可
                for (const child of node.children) {
                    if (child && dfs(index + 1, child)) return true;
                }
            }
            // 字符不存在，返回false
            return false;
        };
        return dfs(0, this.trieRoot);
    }
}
