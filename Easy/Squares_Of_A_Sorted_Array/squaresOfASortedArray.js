// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Example 1:
// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

// Example 2:
// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 
// Note:
// 1 <= A.length <= 10000
// -10000 <= A[i] <= 10000
// A is sorted in non-decreasing order.

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  let result = [];
  if(!A || A.length === 0) return result;
  
  let aI = 0;
  for(let i = 0; i < A.length; i++) {
    if(A[i] > 0) break;
    aI = i;
  }
  
  let bI = aI+1;
  
  while(aI >= 0 && bI < A.length) {
    if(A[aI]*A[aI] < A[bI]*A[bI]) {
      result.push(A[aI]*A[aI]);
      aI--;
    }
    else {
      result.push(A[bI]*A[bI]);
      bI++;
    }
  } 
  
  while(aI >= 0) {
    result.push(A[aI]*A[aI]);
    aI--;
  }
  while(bI < A.length) {
    result.push(A[bI]*A[bI]);
    bI++;
  }
  
  return result;
};