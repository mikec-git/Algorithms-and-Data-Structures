// We want to use quad trees to store an N x N boolean grid. Each cell in the grid can only be true or false. The root node represents the whole grid. For each node, it will be subdivided into four children nodes until the values in the region it represents are all the same.

// Each node has another two boolean attributes : isLeaf and val. isLeaf is true if and only if the node is a leaf node. The val attribute for a leaf node contains the value of the region it represents.

// Your task is to use a quad tree to represent a given grid. The following example may help you understand the problem better:

// Given the 8 x 8 grid below, we want to construct the corresponding quad tree:
// It can be divided according to the definition above:

// The corresponding quad tree should be as following, where each node is represented as a (isLeaf, val) pair.
// For the non-leaf nodes, val can be arbitrary, so it is represented as *.

// Note:
// N is less than 1000 and guaranteened to be a power of 2.
// If you want to know more about the quad tree, you can refer to its wiki.

/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
  return constructRecursive(grid);
};

let constructRecursive = (grid) => {
  if(compare(grid)) return new Node(grid[0][0] === 1, true, null, null, null, null);
  
  let n = grid.length;
  let topL = [];
  let topR = [];
  let botL = [];
  let botR = [];  
  
  for(let i = 0; i < n/2; i++) {
    topL.push(grid[i].slice(0, Math.floor(n/2)));
    topR.push(grid[i].slice(Math.floor(n/2)));
    botL.push(grid[i+n/2].slice(0, Math.floor(n/2)));
    botR.push(grid[i+n/2].slice(Math.floor(n/2)));
  }
  
  let tl = constructRecursive(topL);
  let tr = constructRecursive(topR);
  let bl = constructRecursive(botL);
  let br = constructRecursive(botR);
  
  return new Node(false, false, tl, tr, bl, br);
}

const compare = (grid) => {
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid.length; j++) {
      if(grid[i][j] !== grid[0][0]) return false;
    } 
  } 
  
  return true;
}