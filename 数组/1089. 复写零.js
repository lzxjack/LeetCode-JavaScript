var duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      // console.log(1);
      const temp = arr.slice(i + 1);
      arr[i + 1] = 0;
      let index = 0;
      for (let j = i + 2; j < arr.length; j++) {
        arr[j] = temp[index++];
      }
      i++;
    }
  }

  return arr;
};

console.log(duplicateZeros([0, 0, 0, 0, 0, 0, 0]));
