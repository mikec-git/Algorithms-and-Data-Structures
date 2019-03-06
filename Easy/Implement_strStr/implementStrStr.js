// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(needle === '') { 
    return 0;
  } else if(haystack === '') { 
    return -1;
  }
  
  const re = new RegExp(needle);
  const result = re.exec(haystack);
  
  return result ? result.index : -1;
};

// OR 

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const nLen = needle.length;
  const hLen = haystack.length;
  
  if(needle === '' || haystack === needle) { 
    return 0;
  } else if(haystack === '' || nLen > hLen) { 
    return -1;
  } 
  
  for(let i = 0; i < hLen-nLen+1; i++) { 
    let count = 0;
    for(let j = i; j < nLen+i; j++) { 
      if(haystack[j] === needle[j-i]) { 
        count++;
      }
    }
    
    if(count === nLen) {
      return i;
    }
    
    count = 0;
  }
  
  return -1;
};