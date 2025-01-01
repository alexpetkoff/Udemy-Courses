// console.log(arguments);
// console.log(require("module").wrapper);

const Calculator = require("./test-module-1");

const calculatorOne = new Calculator();

console.log(calculatorOne.add(2, 4));

// exports

// const calc2 = require("./test-module-2");
const { add, multiply } = require("./test-module-2");

console.log(multiply(2, 5));
