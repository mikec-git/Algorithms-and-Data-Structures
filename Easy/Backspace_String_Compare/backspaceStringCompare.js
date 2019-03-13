// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Example 1:
// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".

// Example 2:
// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".

// Example 3:
// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".

// Example 4:
// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".

// Note:
// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.

// Follow up:
// Can you solve it in O(N) time and O(1) space?

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {  
  let sLen = S.length-1;
  let tLen = T.length-1;
  let sBack = 0;
  let tBack = 0;
  
  while(sLen >= 0 || tLen >= 0) {
    while(S[sLen] === '#') {
      sBack++;
      sLen--;
    }
    
    while(T[tLen] === '#') {
      tBack++;
      tLen--;
    }
    
    while(sBack > 0 && S[sLen] !== '#') {
      sLen--;
      sBack--;
    } 
    
    while(tBack > 0 && T[tLen] !== '#') {
      tLen--;
      tBack--;
    }
    
    if(T[tLen] === '#' || S[sLen] === '#') {
      continue;
    }

    if(S[sLen] !== T[tLen]) return false;
    else if(sLen < 0 && tLen < 0) return true;
    
    sLen--;
    tLen--;
  }
  
  return true;
};

// OR 

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {  
  let compareS = [];
  let compareT = [];
  let back = 0;
  
  for(let i = T.length-1; i >= 0; i--) {
    while(T[i] === '#') {
      back++;
      i--;
    }
    
    if(back > 0) {
      back--;
      continue
    }
    compareT.unshift(T[i]);
  }
  
  back = 0;
  for(let j = S.length-1; j >= 0; j--) {
    while(S[j] === '#') {
      back++;
      j--;
    } 
    
    if(back > 0) {
      back--;
      continue;
    }
    
    compareS.unshift(S[j]);
  }
  
  if(compareS.length !== compareT.length) {
    return false;
  }
  
  for(let k = 0; k < compareS.length; k++) {
    if(compareS[k] !== compareT[k]) {
      return false;
    }
  }
  
  return true;
};