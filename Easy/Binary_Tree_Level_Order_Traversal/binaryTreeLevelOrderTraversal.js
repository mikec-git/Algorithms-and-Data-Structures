// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if(!root) {
    return [];
  }
  
  const queue = [root];
  const bottomUp = [];
  
  while(queue.length > 0) { 
    let currLevel = [];
    let queueLen = queue.length;
    
    for(let i = 0; i < queueLen; i++) { 
      const popped = queue.shift();
      
      if(popped.left) {
        queue.push(popped.left);  
      }
      if(popped.right) {
        queue.push(popped.right);
      }      
      
      currLevel.push(popped.val);
    }
    
    bottomUp.unshift(currLevel);    
  }
  
  return bottomUp;
};