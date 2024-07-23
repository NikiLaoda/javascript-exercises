const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  let summary =  a.reduce((sum, CSSMathValue) => sum + CSSMathValue, 0,);
  return summary;
};

const multiply = function(a) {
  let multiplies = a.reduce((sum, caches) => sum * caches, 1,);
  return multiplies;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  let factorial = 1;
  for (let i = 1; i <= a; i++) factorial *= i;
  return factorial;
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
