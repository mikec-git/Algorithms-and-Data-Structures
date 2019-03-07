// Given two binary strings, return their sum (also a binary string).
// The input strings are both non-empty and contains only characters 1 or 0.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let indA = a.length - 1;
  let indB = b.length - 1;  
  let carry = 0;
  let sum = '';
  
  while(indA >= 0 && indB >= 0) { 
    let tot = carry + +a[indA] + +b[indB];
    if(tot === 2) {
      carry = 1;
      sum = '0' + sum;
    } else if(tot >= 3) {
      carry = 1;
      sum = '1' + sum;
    } else {
      sum = tot + sum;
      carry = 0;
    }
    
    indA--;
    indB--;
  }
  
  while(indA >= 0) {
    let tot = carry + +a[indA];
    if(tot === 2) {
      carry = 1;
      sum = '0' + sum;
    } else if(tot >= 3) {
      carry = 1;
      sum = '1' + sum;
    } else {
      sum = tot + sum;
      carry = 0;
    }
    indA--;
  }
    
  while(indB >= 0) {
    let tot = carry + +b[indB];
    if(tot === 2) {
      carry = 1;
      sum = '0' + sum;
    } else if(tot >= 3) {
      carry = 1;
      sum = '1' + sum;
    } else {
      sum = tot + sum;
      carry = 0;
    }
    indB--;
  }
  
  if(carry === 1) {
    sum = '1' + sum;
  }
  
  return sum;
};