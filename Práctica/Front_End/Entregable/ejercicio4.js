const numbers = [8, 2, 6, 4, 10];
const max = numbers.reduce((accum, current_value) => Math.max(accum, current_value));
const sum = numbers.reduce((accum, current_value) => accum + current_value, 0);
const product = numbers.reduce((accum, current_value) => accum * current_value, 1);

console.log(`El max es: ${max}`);
console.log(`La suma es: ${sum}`);
console.log(`El producto es: ${product}`);