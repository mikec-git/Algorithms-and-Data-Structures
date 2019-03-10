// Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.
// Return the quotient after dividing dividend by divisor.
// The integer division should truncate toward zero.

// Example 1:
// Input: dividend = 10, divisor = 3
// Output: 3

// Example 2:
// Input: dividend = 7, divisor = -3
// Output: -2

// Note:
// Both dividend and divisor will be 32-bit signed integers.
// The divisor will never be 0.
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
let MAX_INT = Math.pow(2,31) - 1;
let MIN_INT = -Math.pow(2,31);

var divide = function(dividend, divisor) {
  let isNeg = false;
  if(dividend > 0 !== divisor > 0) {
    isNeg = true;
  }
  
  if(divisor <= 1 && divisor >= -1 || dividend === 0) {
    if(dividend > MAX_INT) {
      return isNeg ? -MAX_INT : -MIN_INT;
    } else if(dividend <= MIN_INT) {
      return isNeg ? MIN_INT : MAX_INT;
    } else {
      return isNeg ? -Math.abs(dividend) : Math.abs(dividend);      
    }
  } 
  
  let result = -1;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  
  while(0 <= dividend) {
    dividend -= divisor;
    result++;
  }
  
  return isNeg ? -result : result;  
};