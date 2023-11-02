const numbers = [8, 2, 6, 4, 10];

Array.prototype.my_reduce = function(callback, initial_value){
  if (this.length === 0 && initial_value === undefined){
    throw new TypeError('Reduce arreglo vacio sin valor inicial');
  }

  let accum = initial_value !== undefined ? initial_value : this[0];

  for (let element of this){
    accum = callback(accum, element);
  }
  return accum;
};


const max = numbers.my_reduce((max, current_value) => Math.max(max, current_value));
const sum = numbers.my_reduce((accum, current_value) => accum + current_value, 0);
const product = numbers.my_reduce((accum, current_value) => accum * current_value, 1);

console.log(`El max es: ${max}`);
console.log(`La suma es: ${sum}`);
console.log(`El producto es: ${product}`);