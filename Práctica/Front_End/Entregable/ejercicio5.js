function zero(operation = null) {
  return operation ? operation(0) : 0;
}

function one(operation = null) {
  return operation ? operation(1) : 1;
}

function two(operation = null) {
  return operation ? operation(2) : 2;
}

function three(operation = null) {
  return operation ? operation(3) : 3;
}

function four(operation = null) {
  return operation ? operation(4) : 4;
}

function five(operation = null) {
  return operation ? operation(5) : 5;
}

function six(operation = null) {
  return operation ? operation(6) : 6;
}

function seven(operation = null) {
  return operation ? operation(7) : 7;
}

function eight(operation = null) {
  return operation ? operation(8) : 8;
}

function nine(operation = null) {
  return operation ? operation(9) : 9;
}

function plus(right_operand) {
  return function (left_operand) {
    return left_operand + right_operand;
  };
}

function minus(right_operand) {
  return function (left_operand) {
    return left_operand - right_operand;
  };
}

function times(right_operand) {
  return function (left_operand) {
    return left_operand * right_operand;
  };
}

function dividedBy(right_operand) {
  return function (left_operand) {
    return Math.floor(left_operand / right_operand);
  };
}

console.log(seven(times(five()))); 
console.log(four(plus(nine()))); 
console.log(eight(minus(three()))); 
console.log(six(dividedBy(two()))); 