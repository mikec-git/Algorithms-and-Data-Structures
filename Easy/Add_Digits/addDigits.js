// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
// Example:

// Input: 38
// Output: 2 
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
//              Since 2 has only one digit, return it.

// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  while(num >= 10) {
    num = num % 10 + Math.floor(num/10);
  }
  
  return num;
};

// OR 

var addDigits = function(num) {
  return num > 0 && num % 9 === 0 ? 9 : num % 9;
};