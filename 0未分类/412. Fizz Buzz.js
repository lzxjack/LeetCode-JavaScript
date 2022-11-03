const fizzBuzz = n => {
    const res = [];
    const [three, five, threeAndFive] = ['Fizz', 'Buzz', 'FizzBuzz'];
    for (let i = 1; i <= n; i++) {
        if (!(i % 3) && !(i % 5)) {
            res.push(threeAndFive);
        } else if (!(i % 3)) {
            res.push(three);
        } else if (!(i % 5)) {
            res.push(five);
        } else {
            res.push(`${i}`);
        }
    }
    return res;
};
