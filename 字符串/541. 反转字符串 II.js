// 反转数组中某个区间
const reverseArr = (arr, left, right) => {
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
};

const reverseStr = (s, k) => {
    const arrS = s.split('');
    const len = arrS.length;
    for (let i = 0; i < len; i += 2 * k) {
        // 反转该区间
        reverseArr(arrS, i, i + k - 1);
    }
    return arrS.join('');
};

const [s, k] = ['abcdefghsdfgfasdgasfg', 3];
console.log(reverseStr(s, k));
