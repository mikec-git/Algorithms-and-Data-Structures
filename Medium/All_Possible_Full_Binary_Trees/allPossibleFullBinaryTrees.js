// A full binary tree is a binary tree where each node has exactly 0 or 2 children.

// Return a list of all possible full binary trees with N nodes.  Each element of the answer is the root node of one possible tree.
// Each node of each tree in the answer must have node.val = 0.

// You may return the final list of trees in any order.

// Example 1:
// Input: 7
// Output: [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
// Explanation:

// Note:
// 1 <= N <= 20

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
let savedTrees = { };

var allPossibleFBT = function(N) {
  if(savedTrees[N]) return savedTrees[N];
  let trees = [];
  if(N % 2 === 0) return trees;
  if(N === 1) {
    trees.push(new TreeNode(0));
    savedTrees[N] = trees;
    return savedTrees[N];
  }
  // Start at 1 to account for root node of each tree
  for(let i = 1; i < N; i+=2) {
    let leftTrees = allPossibleFBT(i);
    let rightTrees = allPossibleFBT(N-i-1);
    
    for(let j = 0; j < leftTrees.length; j++) {
      for(let k = 0; k < rightTrees.length; k++) {
        let newNode = new TreeNode(0);
        newNode.left = cloneTree(leftTrees[j]);
        newNode.right = cloneTree(rightTrees[k]);
        trees.push(newNode);
      } 
    }
  }  
  savedTrees[N] = trees;
  return trees;
};

const cloneTree = (node) => {
  if(!node) return null;
  let cloneNode = new TreeNode(0);
  cloneNode.left = cloneTree(node.left);
  cloneNode.right = cloneTree(node.right);
  return cloneNode;
}