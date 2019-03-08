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
  
  const pascals = [[1]];
  
  for(let i = 1; i < numRows; i++) {
    let row = [1];
    let prevRow = pascals[i-1];
    
    for(let j = 1; j < i; j++) {
      row.push(prevRow[j] + prevRow[j-1]);
    }
    
    row.push(1);
    pascals.push(row);
  }
  
  return pascals;
};