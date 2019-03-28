// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:
// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:
// Input: "race a car"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {  
  let i = 0;
  let j = s.length-1;
  s = s.toLowerCase();
  
  for(let i = 0, j = s.length-1; i < j; i++, j--) {
    while(i < j && !/[a-z0-9]/.test(s[i])) i++;
    while(i < j && !/[a-z0-9]/.test(s[j])) j--;
    
    if(i >= j) break;
    if(s[i] !== s[j]) return false;
  }
  
  return true;
};

// OR 

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {  
  let i = 0;
  let j = s.length-1;
  s = s.toLowerCase();
  
  for(let i = 0, j = s.length-1; i < j; i++, j--) {
    while(i < j && ((isNaN(s[i]) || s[i] === ' ') && (s[i].charCodeAt(0) < 97 || s[i].charCodeAt(0) > 122))) i++;
    while(i < j && ((isNaN(s[j]) || s[j] === ' ') && (s[j].charCodeAt(0) < 97 || s[j].charCodeAt(0) > 122))) j--;
    
    if(i >= j) break;
    if(s[i] !== s[j]) return false;
  }
  
  return true;
};