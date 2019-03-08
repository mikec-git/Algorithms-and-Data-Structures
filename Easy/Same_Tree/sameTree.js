// Given two binary trees, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

// Example 1:
// Input:     1         1
//           / \       / \
//          2   3     2   3

//         [1,2,3],   [1,2,3]

// Output: true

// Example 2:
// Input:     1         1
//           /           \
//          2             2

//         [1,2],     [1,null,2]

// Output: false

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {  
  return traverseTree(p,q);
};

function traverseTree(tree1, tree2) {
  if(!tree1 && !tree2) {
    return true;
  }
  
  if(!tree1 || !tree2 || tree1.val !== tree2.val) {
    return false;    
  }
  
  return traverseTree(tree1.left, tree2.left) && traverseTree(tree1.right, tree2.right);
}