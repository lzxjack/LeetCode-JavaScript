const mapArr = [
  '.-',
  '-...',
  '-.-.',
  '-..',
  '.',
  '..-.',
  '--.',
  '....',
  '..',
  '.---',
  '-.-',
  '.-..',
  '--',
  '-.',
  '---',
  '.--.',
  '--.-',
  '.-.',
  '...',
  '-',
  '..-',
  '...-',
  '.--',
  '-..-',
  '-.--',
  '--..'
];

const uniqueMorseRepresentations = words => {
  const set = new Set();

  for (const word of words) {
    set.add(getPwd(word));
  }

  return set.size;
};

const getNum = char => char.charCodeAt() - 97;

const getPwd = word => {
  let res = '';
  for (const char of word) {
    res += mapArr[getNum(char)];
  }
  return res;
};
