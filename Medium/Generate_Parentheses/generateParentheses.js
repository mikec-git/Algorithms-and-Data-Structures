// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if(n === 0) {
    return [''];
  }
  
  let result = [];  
  recursiveGenerateParenthesis(result, '(', 1, 0, n);  
  return result;
};

function recursiveGenerateParenthesis(result, parenStr, opened, closed, n) {
  if(parenStr.length === n*2) {
    result.push(parenStr);
    return;
  }
    
  if(opened < n) {
    recursiveGenerateParenthesis(result, parenStr + '(', opened+1, closed, n);
  }
  
  if(opened > closed) {
    recursiveGenerateParenthesis(result, parenStr + ')', opened, closed+1, n);
  }
}