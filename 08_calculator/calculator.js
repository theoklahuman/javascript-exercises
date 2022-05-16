const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arrays) {
  {let num = 0;
for (array of arrays) {
       num += array;
  }; return num;
};return 0;
};

const multiply = function(arrays) {
  {let num = 1;
for (array of arrays) {
       num *= array;
  }; return num;
};return 0;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a == 0) {
  return 1;
  } else {
  let num = 1;
  for (let i = 1; i <= a; i++) {
  num *= i;
  }; return num;
  }
  }

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
