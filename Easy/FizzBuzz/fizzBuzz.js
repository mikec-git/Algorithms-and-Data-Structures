// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// Example:
// n = 15,
// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let result = [];
  for(let i = 1; i <= n; i++) {
    if(i%3 === 0 && i%5 === 0) {
      result.push('FizzBuzz');
    } else if(i%3 === 0) {
      result.push('Fizz');
    } else if(i%5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i.toString());
    }
  }
  
  return result;
};

// OR 

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let result = [];
  for(let i = 1; i <= n; i++) {
    let str = '';
    if(i%3 === 0) str += 'Fizz';
    if(i%5 === 0) str += 'Buzz';
    if(str === '') str += i;
    result.push(str);
  }
  
  return result;
};