// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

// Example 1:
// Input: 
// [
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ]
// Output: 
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]

// Example 2:
// Input: 
// [
//   [0,1,2,0],
//   [3,4,5,2],
//   [1,3,1,5]
// ]
// Output: 
// [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
// ]

// Follow up:
// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?

public class Solution {
  public void SetZeroes(int[][] matrix) {    
    var colZero = false;
    
    for(var i = 0; i < matrix.Length; i++) {       
      if(matrix[i][0] == 0) colZero = true;
      for(var j = 1; j < matrix[0].Length; j++) {
        if(matrix[i][j] == 0) {
          matrix[i][0] = 0;
          matrix[0][j] = 0;
        }
      }
    }
    
    for(var i = matrix.Length-1; i >= 0; i--) { 
      for(var j = matrix[0].Length-1; j >= 1; j--) {
        if(matrix[i][0] == 0 || matrix[0][j] == 0) {
          matrix[i][j] = 0;          
        }
      }
      if(colZero) matrix[i][0] = 0;
    }
  }
}