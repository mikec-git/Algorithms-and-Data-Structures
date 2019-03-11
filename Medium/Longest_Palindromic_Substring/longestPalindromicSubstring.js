/**
 * @param {string} s
 * @return {string}
 */

// Centre out approach
// O(n^2) time
// O(1) space
var longestPalindrome = function(s) {
  let maxSubString = '';
  
  for(let i = 0; i < s.length; i++) {
    // Accounts for even substrings like baab (aa)
    for(let j = 0; j < 2; j++) {
      let left = i;
      let right = i + j;
      while(s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      
      if(right-left-1 > maxSubString.length) {
        maxSubString = s.substring(left+1, right);
      }
    }
  }
  
  return maxSubString;
};

// Dynamic Programming Approach 
// O(n^2) time
// O(n^2) space
var longestPalindrome = function(s) {
  let memo = new Array(s.length).fill(false).map(arr => new Array(s.length).fill(false));
  let stringStart = 0;
  let stringEnd = 0;
  
  for(let last = 0; last < s.length; last++) {
    for(let first = 0; first < s.length - last; first++) {
      if(first === first+last || 
        last > 1 && s[first] === s[first+last] && memo[first+1][first+last-1] ||
        last <= 1 && s[first] === s[first+last]) {
        memo[first][first+last] = true;
        
        if(last > stringEnd - stringStart) {
          stringStart = first;
          stringEnd = first+last;
        }
      } else {
        memo[first][first+last] = false;
      }
    }
  }
  
  return s.substring(stringStart, stringEnd+1);
};