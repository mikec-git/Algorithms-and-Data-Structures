// For a non-negative integer X, the array-form of X is an array of its digits in left to right order.  For example, if X = 1231, then the array form is [1,2,3,1].
// Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.

// Example 1:
// Input: A = [1,2,0,0], K = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234

// Example 2:
// Input: A = [2,7,4], K = 181
// Output: [4,5,5]
// Explanation: 274 + 181 = 455

// Example 3:
// Input: A = [2,1,5], K = 806
// Output: [1,0,2,1]
// Explanation: 215 + 806 = 1021

// Example 4:
// Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
// Output: [1,0,0,0,0,0,0,0,0,0,0]
// Explanation: 9999999999 + 1 = 10000000000 

// Note：
// 1 <= A.length <= 10000
// 0 <= A[i] <= 9
// 0 <= K <= 10000
// If A.length > 1, then A[0] != 0

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  let a = A.length-1;
  let temp = 0;
  
  while(K > 0 || a >= 0) {
    if(a >= 0) {
      temp = A[a] + K;
      A[a] = temp % 10;
    } else {
      temp = K;
      A.unshift(temp%10);
    }
    K = Math.floor(temp/10);      
    a--;
  }
  
  return A;
}

// OR 

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  let kNum = K.toString();
  let kArr = [];
  for(let i = 0; i < kNum.length; i++ ) {
    kArr.push(+kNum.charAt(i))
  }
  
  let a = A.length-1;
  let k = kArr.length-1;
  let sumArr = [];
  let carry = false;
  while(a >=0 || k >= 0) {
    let sum;
    if(a >= 0 && k >= 0) {
      sum = A[a] + kArr[k];
    } else if(a >= 0) {
      sum = A[a];
    } else {
      sum = kArr[k];
    }
    
    if(carry) {
      if(sum + 1 >= 10) {
        sumArr.unshift(sum - 10 + 1);
        carry = true;
      } else {
        sumArr.unshift(sum + 1);
        carry = false;
      }      
    } else {
      if(sum >= 10) {
        sumArr.unshift(sum - 10);
        carry = true;
      } else {
        sumArr.unshift(sum);
        carry = false;
      }      
    }
    a--;
    k--;
  }
  
  if(carry) sumArr.unshift(1);
  
  return sumArr;
}