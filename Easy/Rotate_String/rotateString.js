// We are given two strings, A and B.

// A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

// Example 1:
// Input: A = 'abcde', B = 'cdeab'
// Output: true

// Example 2:
// Input: A = 'abcde', B = 'abced'
// Output: false
// Note:

// A and B will have length at most 100.

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  if(A.length !== B.length) return false;
  if(A == B) return true;
  
  let queue = [];
  for(let i = 0; i < A.length; i++) {
    if(A[i] == B[0]) queue.push(i);
  }
  
  while(queue.length > 0) {
    let top = queue.shift();
    let j = 0;
    while(j < A.length) {
      let newI = (top+j) % B.length;
      if(A[newI] !== B[j++]) break;
    }
    if(j === A.length) return true;
  }
  
  return false;
};

// OR (rolling hash)

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  if(A.length !== B.length) return false;
  if(A == B) return true;
  
  const prime = 101;
  let hA = 0;
  let hB = 0;
  for(let i = 0; i < A.length; i++) {
    hA += A[i].charCodeAt(0) * Math.pow(prime, i);
    hB += B[i].charCodeAt(0) * Math.pow(prime, i);
  }
  
  for(let k = 0; k < A.length; k++) {
    let end = (k + A.length) % A.length;
    hA -= A[k].charCodeAt(0);
    hA /= prime;
    hA += A[end].charCodeAt(0) * Math.pow(prime, A.length-1);
    if(hA === hB) return true;
  }
  
  return false;  
};