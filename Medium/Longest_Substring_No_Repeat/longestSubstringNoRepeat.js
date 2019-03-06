// Given a string, find the length of the longest substring without repeating characters.

// Example:
// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let longestLength = 0;
  let tempLength = 0;
  let lastRepeatIndex = 0;
  let map = {};
  
  for(let i = 0; i < s.length; i++) { 
    if(!map.hasOwnProperty(s[i])) { 
      tempLength++;
    } else {
      let firstIndex = map[s[i]];
      lastRepeatIndex = firstIndex > lastRepeatIndex ? firstIndex : lastRepeatIndex;    
      
      if(longestLength < tempLength) {
        longestLength = tempLength;
      }
      
      tempLength = i - lastRepeatIndex;
    }
    
    map[s[i]] = i;
  } 
      
  if(longestLength < tempLength) {
    longestLength = tempLength;
  }
  
  return longestLength;
};