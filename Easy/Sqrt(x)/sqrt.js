// Implement int sqrt(int x).
// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

// Example 1:
// Input: 4
// Output: 2

// Example 2:
// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since 
//              the decimal part is truncated, 2 is returned.

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  return Math.floor(Math.pow(x, 0.5));
};

// OR 

var mySqrt = function(x) {  
  let start = 1;
  let end = Math.floor(x / 2) + 1;
  
  while(start <= end) { 
    let mid = Math.floor((end+start)/2);
    
    if(mid * mid === x) {
      return mid;
    } else if(mid * mid < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }    
  }
  
  return end;
}