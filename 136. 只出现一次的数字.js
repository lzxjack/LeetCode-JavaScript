// 0和任何数异或=任何数本身
// 任何数和自身异或=0

const singleNumber = nums => {
    let num = 0;
    for (let i = 0; i < nums.length; i++) {
        num = num ^ nums[i];
    }
    return num;
};

console.log(singleNumber([1, 21, 21]));
