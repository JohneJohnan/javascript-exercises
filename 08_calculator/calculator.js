const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
	return array.reduce((total, arg) => total += arg, 0);
};

const multiply = array => array.reduce((result,arg) => result *= arg, 1);

const power = (base, pow) => {
  let result = 1;
  for (let i = 0; i < pow; i++)
    result *= base;
  return result;
};

const factorial = function(input) {
	let result = 1;
  for (;input > 0; input--)
    result *= input;
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
