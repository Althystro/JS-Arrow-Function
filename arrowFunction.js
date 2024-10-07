// Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

const greet = (name) => {
  return console.log(`Hello, ${name}`);
};
greet("wahab");
// Write a simple arrow function that takes two parameters and returns their sum.

const sumOfNumbers = (numberOne, numberTwo) => {
  return console.log(numberOne + numberTwo);
};
sumOfNumbers(3, 2);
// Write a simple arrow function that squares a number.
const squaredNumber = (number) => {
  return console.log(number * number);
};
squaredNumber(9);

//challenge

const arraySquared = (array) => {
  let result = array.map((value) => {
    return value * value;
  });
  return result;
};
let arrayOfNumbers = [1, 2, 3, 4];
console.log(arraySquared(arrayOfNumbers));
