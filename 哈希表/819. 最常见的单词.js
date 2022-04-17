const mostCommonWord = (paragraph, banned) => {
  const set = new Set(banned);

  paragraph = paragraph.toLowerCase().replace(/[!?',;.]/g, ' ');
  const words = paragraph.split(' ').filter(word => !set.has(word));

  const map = new Map();

  const max = {
    count: 0,
    word: ''
  };

  for (const word of words) {
    word && map.set(word, (map.get(word) || 0) + 1);
    if (map.get(word) > max.count) {
      max.count = map.get(word);
      max.word = word;
    }
  }

  return max.word;
};
