// You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Note: Given n will be a positive integer.

// Example 1:
// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let memo = {};
  return recursiveStep(n, memo);
};

function recursiveStep(n, memo) {
  if(n < 0) {
    return 0;
  } else if(n === 0) {    
    return 1;
  } else if(memo[n]) {
    return memo[n];
  }
  
  memo[n] = recursiveStep(n-1, memo) + recursiveStep(n-2, memo);
  return memo[n];
}

// OR 

var climbStairs = function(n) {  
  if(n <= 2) { 
    return n;
  }
  
  let oneStep = 1;
  let twoStep = 2;
  let total = 0;
  
  for(let i = 3; i <= n; i++) {
    total = oneStep + twoStep;
    oneStep = twoStep;
    twoStep = total;
  }
  
  return total;
};