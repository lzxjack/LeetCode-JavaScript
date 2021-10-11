const numberToWords = n => {
    if (!n) return 'Zero';
    // 先转化为二维数组，每3个数成1组
    // 先转化为字符串
    const str = `${n}`;
    const nums = [];
    const lenStr = str.length;
    let index = 0;
    let numTemp = [];
    for (let i = lenStr - 1; i >= 0; i--) {
        // 从尾开始遍历
        numTemp.push(str[i]);
        index++;
        // 如果3个了，或者遍历到头了，那么分成一组
        if (index === 3 || i === 0) {
            nums.push(numTemp.reverse());
            index = 0;
            numTemp = [];
        }
    }
    const num = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const unitBig = ['', 'Thousand', 'Million', 'Billion'];
    const num2Small = [
        'Ten',
        'Eleven',
        'Twelve',
        'Thirteen',
        'Fourteen',
        'Fifteen',
        'Sixteen',
        'Seventeen',
        'Eighteen',
        'Nineteen',
    ];
    const num2Big = [
        '',
        '',
        'Twenty',
        'Thirty',
        'Forty',
        'Fifty',
        'Sixty',
        'Seventy',
        'Eighty',
        'Ninety',
    ];
    let res = '';
    const lenNums = nums.length;
    // 遍历这个二维数组
    for (let i = lenNums - 1; i >= 0; i--) {
        let strTemp = '';
        // 根据每组的长度进行相应转换
        switch (nums[i].length) {
            case 1:
                // 长度为1，直接转化为个位数的单词
                strTemp += ` ${num[nums[i][0]]}`;
                break;
            case 2:
                // 长度为2
                if (nums[i][0] === '1') {
                    // 十位数为1，则转化为10~19的单词
                    strTemp += ` ${num2Small[nums[i][1]]}`;
                } else {
                    // 十位数不为1，则转化为20~90、补上个位数的单词
                    strTemp += ` ${num2Big[nums[i][0]]}`;
                    strTemp += ` ${num[nums[i][1]]}`;
                }
                break;
            case 3:
                // 长度为3
                // 先判断是否全是0，若全是0，直接跳出
                if (nums[i][0] === '0' && nums[i][1] === '0' && nums[i][2] === '0') break;
                // 判断百位数不为0，加上Hundred
                if (nums[i][0] !== '0') strTemp += `${num[nums[i][0]]} Hundred`;
                if (nums[i][1] === '1') {
                    // 十位数为1，则转化为10~19的单词
                    strTemp += ` ${num2Small[nums[i][2]]}`;
                } else if (nums[i][1] === '0') {
                    // 十位数为0，则转化为个位数的单词
                    strTemp += ` ${num[nums[i][2]]}`;
                } else {
                    // 十位数不为1且不为0，则转化为20~90、补上个位数的单词
                    strTemp += ` ${num2Big[nums[i][1]]}`;
                    strTemp += ` ${num[nums[i][2]]}`;
                }
                break;
        }
        // 每组的3位数转换完成后，判断其去掉收尾空格后是否有值
        // 如有值，累加到res，并加上单位这一组的单位
        if (strTemp.trim()) res += ` ${strTemp.trim()} ${unitBig[i]}`;
    }
    // 返回res，去掉首尾空格
    return res.trim();
};
