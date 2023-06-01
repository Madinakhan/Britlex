const summa = (a) => (b) => (c) => (d) => (e) => (f) => a + b + c + d + e + f;

const first = summa(1);
const second = first(2);
const third = second(3);
const four = third(4);
const five = four(5);
const result = five(6);
