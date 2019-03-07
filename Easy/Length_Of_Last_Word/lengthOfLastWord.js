// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
// If the last word does not exist, return 0.

// Note: A word is defined as a character sequence consists of non-space characters only.

// Example:
// Input: "Hello World"
// Output: 5

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let count = 0;
  let isWhiteSpace = true;
  
  for(let i = s.length-1; i >= 0; i--) {     
    if(s[i] === ' ') {
      if(!isWhiteSpace) {
        break;
      }
      isWhiteSpace = true; 
    } else {
      isWhiteSpace = false;
      count++;
    }
  }
  
  return count;
};