const complexNumberMultiply = (num1, num2) => {
  const [a1, b1] = getNum(num1);
  const [a2, b2] = getNum(num2);

  const a = a1 * a2 - b1 * b2;
  const b = a1 * b2 + a2 * b1;

  return `${a}+${b}i`
};

const getNum = strNum => {
  const str = strNum.slice(0, strNum.length - 1);
  const [a, b] = str.split('+');
  return [Number(a), Number(b)];
};
