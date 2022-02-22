const decodeString = s => {
  const reg = /[0-9]/;
  const stack = [];
  let num = '';
  let str = '';

  for (const char of s) {
    if (reg.test(char)) {
      num += char;
    } else if (char === '[') {
      // 将已拼接好的字符串、当前num放入stack
      stack.push([str, num]);
      // 清空
      num = '';
      str = '';
    } else if (char === ']') {
      // _str代表上一轮已有的字符串
      [_str, _num] = stack.pop();
      // str当前累计的字符串
      str = _str + str.repeat(_num);
    } else {
      str += char;
    }
  }

  return str;
};
