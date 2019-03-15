// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:
// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let isCarry = false;
  
  let len1 = num1.length-1;
  let len2 = num2.length-1;
    
  let sum = '';
  while(len1 >= 0 || len2 >= 0 || isCarry) {
    let add1 = len1 >= 0 ? num1[len1--] - '0' : 0;
    let add2 = len2 >= 0 ? num2[len2--] - '0' : 0;    
    let addNums = isCarry ? add1 + add2 + 1 : add1 + add2;
    
    if(addNums > 9) {
      isCarry = true;
      addNums -= 10;      
    } else {
      isCarry = false;
    }
    
    sum = addNums + sum;
  }
  
  return sum;
};