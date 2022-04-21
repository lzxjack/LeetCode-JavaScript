const toGoatLatin = sentence => {
  const arr = sentence.split(' ');

  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (/^[aeiouAEIOU]/.test(arr[i])) {
      arr[i] = `${arr[i]}ma`;
    } else {
      arr[i] = `${arr[i]}${arr[i][0]}ma`.slice(1);
    }
    const temp = new Array(i + 1).fill('a').join('');
    arr[i] = `${arr[i]}${temp}`;
  }

  return arr.join(' ');
};
