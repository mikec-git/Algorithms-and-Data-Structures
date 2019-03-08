// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if(numRows === 0) {
    return [];
  }
  
  const pascals = [];
  
  for(let i = 1; i <= numRows; i++) {
    let row = [];
    for(let j = 0; j < i; j++) {
      if(j > 0 && j < i-1) {
        let prevRow = pascals[i-2];
        row.push(prevRow[j] + prevRow[j-1]);
      } else {
        row.push(1);
      }
    }
    pascals.push(row);
  }
  
  return pascals;
};