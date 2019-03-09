// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {  
  if(numRows === 1) {
    return s;
  }
  
  let convertedStr = s[0];
  // Describes indices from bottom of zigzag to top
  let step = numRows-1;
  
  // Describes bottom of zigzac (I call it mid)
  let midInd = null;
  
  while(step >= 0) {
    // Need to loop as many times as chars in first row
    for(let i = 0; i < s.length/numRows; i++) {  
      midInd = numRows + i*2*(numRows-1) - 1; 
      
      // Only called on 2nd row or below
      if(step < numRows-1 && s[midInd - step]) {
        convertedStr += s[midInd - step];
      }
      
      // Called if next char, to the right of midInd, exists
      if(midInd + step < s.length && step > 0) {
        convertedStr += s[midInd + step];
      }
    }
    step--;
  }
  
  return convertedStr;
};