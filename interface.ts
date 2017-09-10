function getSum(sum: values) {
    return sum.a + sum.b;
}

interface values {
    a: number,
    b: number
}

console.log(getSum({ a: 1, b: 2}));
