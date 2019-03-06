/*
  Given a 32-bit signed integer, reverse digits of an integer.
  
  Example 1:
  Input: 123
  Output: 321

  Example 2:
  Input: -123
  Output: -321

  Example 3:
  Input: 120
  Output: 21
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let temp = x;
  let reversed = 0;
  let reverseArr = [];
  let mod = 0;
  
  while(x !== 0) {
    mod = x % 10;
    x = x >= 0 ? Math.floor(x / 10) : Math.ceil(x / 10);
    
    reversed = reversed * 10 + mod;
  }
  
  if(reversed > Math.pow(2,31) - 1 || reversed < -Math.pow(2,31)) { 
    return 0;
  }
  
  return reversed;
};