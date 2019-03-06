/* 
  Write a function to find the longest common prefix string amongst an array of strings.

  If there is no common prefix, return an empty string "".

  Example 1:
  Input: ["flower","flow","flight"]
  Output: "fl"

  Example 2:
  Input: ["dog","racecar","car"]
  Output: ""
  Explanation: There is no common prefix among the input strings.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = '';
  let index = 0;
  
  if(!Array.isArray(strs) || strs.length <= 0 || strs[0].length <= 0) { 
    return prefix;
  }
  
  while(true) { 
    let letter = strs[0].length > 1 ? strs[0][index] : strs[0];
        
    let isSame = strs.every((el, ind, arr) => {
      return el[index] && el[index] === letter;
    });
    
    if(isSame) { 
      prefix += letter;
      index++;
    } else {
      break;
    }
  }
  
  return prefix;
};