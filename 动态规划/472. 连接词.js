// hard

const findAllConcatenatedWordsInADict = words => {
    words.sort((a, b) => a.length - b.length);
    const wordSet = new Set();
    const ans = [];
    for (const word of words) {
        if (exists(word, wordSet)) ans.push(word);
        wordSet.add(word);
    }
    return ans;
};

const exists = (word, wordSet) => {
    const dp = Array(word.length).fill(false);
    for (let i = 0; i < word.length; i += 1) {
        if (wordSet.has(word.slice(0, i + 1))) {
            dp[i] = true;
            continue;
        }
        for (let j = 0; j < i; j += 1) {
            if (dp[j] && wordSet.has(word.slice(j + 1, i + 1))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[word.length - 1];
};
