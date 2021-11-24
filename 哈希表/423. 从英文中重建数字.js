const originalDigits = s => {
    const map = new Map();
    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    const num = new Array(10).fill(0);
    // 0 2 4 6 8这几个数，只出现在一个字母中
    num[0] = map.get('z') || 0;
    num[2] = map.get('w') || 0;
    num[4] = map.get('u') || 0;
    num[6] = map.get('x') || 0;
    num[8] = map.get('g') || 0;

    // 3 5 7出现在h f s，可以由8 4 6推算出
    num[3] = (map.get('h') || 0) - num[8];
    num[5] = (map.get('f') || 0) - num[4];
    num[7] = (map.get('s') || 0) - num[6];

    // 1 由 0 2 4推出
    num[1] = (map.get('o') || 0) - num[0] - num[2] - num[4];
    // nine 根据i算
    num[9] = (map.get('i') || 0) - num[5] - num[6] - num[8];

    const res = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < num[i]; j++) {
            res.push(i);
        }
    }
    return res.join('');
};
