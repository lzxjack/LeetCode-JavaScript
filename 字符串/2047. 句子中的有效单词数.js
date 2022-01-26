const countValidWords = sentence => {
  const words = sentence.trim().split(/\s+/g);
  const reg = /^([a-z]+(-[a-z]+)?)?[!\.,]?$/;
  let res = 0;
  for (const word of words) {
    if (reg.test(word)) res++;
  }
  return res;
};
