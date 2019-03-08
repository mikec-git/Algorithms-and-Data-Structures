// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example:
// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its minimum depth = 2.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if(!root) {
    return 0;
  }
  
  if(!root.right && !root.left) {
    return 1;
  }
  
  if(!root.right) {
    return minDepth(root.left) + 1;
  }
  
  if(!root.left) {
    return minDepth(root.right) + 1;
  } 
  
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};

// OR 

var minDepth = function(root) {
  let result;  
  if(!root) {
    return 0;
  }

  function getMinDepth(node, depth) {    
    if(!node.left && !node.right) { 
      result = Math.min(depth, result || depth);
    }
    
    if(node.left) {
      getMinDepth(node.left, depth + 1);
    }
    if(node.right) {
      getMinDepth(node.right, depth + 1);
    }
  }
  
  getMinDepth(root, 1);
  return result;
};


