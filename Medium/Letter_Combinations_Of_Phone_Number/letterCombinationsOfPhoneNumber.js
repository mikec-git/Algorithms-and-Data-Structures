// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// 1: '*',
// 2: 'abc',
// 3: 'def',
// 4: 'ghi',
// 5: 'jkl',
// 6: 'mno',
// 7: 'pqrs',
// 8: 'tuv',
// 9: 'wxyz',
// 0: ' '

// Example:
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:

// Although the above answer is in lexicographical order, your answer could be in any order you want.

/**
 * @param {string} digits
 * @return {string[]}
 */
let numMap = {
  1: '*',
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
  0: ' '
}

var letterCombinations = function(digits) {
  if(digits === null || digits.length === 0) {
    return [];
  }
  
  let result = [];  
  recursiveLetterCombination(result, '', 0, digits)
    
  return result;
};

const recursiveLetterCombination = (result, currString, index, digits) => {
  if(index === digits.length) {
    result.push(currString);
    return;
  }
  
  for(let i = 0; i < numMap[digits[index]].length; i++) {
    recursiveLetterCombination(result, currString+numMap[digits[index]][i], index+1, digits);
  }
}