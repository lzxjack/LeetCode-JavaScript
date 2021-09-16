const findWords = (board, words) => {
    const res = [];
    const [h, w] = [board.length, board[0].length];

    // 构建字典树
    const getTrie = words => {
        const root = Object.create(null);
        for (const word of words) {
            let node = root;
            for (const c of word) {
                if (!node[c]) node[c] = Object.create(null);
                node = node[c];
            }
            // 使用单词标记单词结尾
            node.isEnd = word;
        }
        return root;
    };

    // DFS 深度优先搜素
    const dfs = (trie, i, j) => {
        // 遍历到结尾
        if (trie.isEnd) {
            // 将结尾单词放入res
            res.push(trie.isEnd);
            trie.isEnd = null;
        }

        // 边界条件
        if (i < 0 || j < 0 || i >= h || j >= w) return;

        // 不在字典树中，返回
        if (!trie[board[i][j]]) return;

        const temp = board[i][j];
        // 标记已访问，以免再次遇到
        board[i][j] = '#';
        dfs(trie[temp], i, j - 1);
        dfs(trie[temp], i, j + 1);
        dfs(trie[temp], i - 1, j);
        dfs(trie[temp], i + 1, j);
        // 四个方向访问完毕，恢复字符
        board[i][j] = temp;
    };

    // 遍历网格
    const trie = getTrie(words);
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            dfs(trie, i, j);
        }
    }
    return res;
};
