const add = function(first, second) {
    return first + second ;
};

const subtract = function(first, second) {
    return first - second; 
};

const sum = function(arr) {
    return arr.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
};

const multiply = function(arr) {
    return arr.reduce((acc, currentVal) => acc * currentVal, 1)
};

const power = function(first, second) {
    return first ** second;
};

const factorial = function(num) {
    let fact = 1;
    if(num == 0) return 1;

    for (let i = num; i > 0; --i) {
        fact *= i;
    }

    return fact;
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
