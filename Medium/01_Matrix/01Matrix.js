// Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.

// Example 1: 
// Input:
// 0 0 0
// 0 1 0
// 0 0 0

// Output:
// 0 0 0
// 0 1 0
// 0 0 0

// Example 2: 
// Input:
// 0 0 0
// 0 1 0
// 1 1 1

// Output:
// 0 0 0
// 0 1 0
// 1 2 1

// Note:
// The number of elements of the given matrix will not exceed 10,000.
// There are at least one 0 in the given matrix.
// The cells are adjacent in only four directions: up, down, left and right.

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let queue = [];
  
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      if(matrix[i][j] === 0) queue.push([i,j]);
      else matrix[i][j] = Number.MAX_VALUE;
    }  
  }
  
  let adj = [[-1,0], [0,1], [1,0], [0,-1]];
  while(queue.length) {
    let [i, j] = queue.shift();
    for(let dir of adj) {
      let row = i + dir[0];
      let col = j + dir[1];
      
      if(row < 0 || row >= rows || col < 0 || col >= cols || matrix[row][col] <= matrix[i][j] + 1) {
        continue;
      }      
      queue.push([row,col]);
      matrix[row][col] = matrix[i][j] + 1;
    }
  }
  
  return matrix;
};