/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  if(!root) {
    return true;
  }
  
  return isTreeBalanced(root);
};

function isTreeBalanced(node) {
  if(!node) {
    return true;
  }  
  
  let leftH = getHeight(node.left);
  let rightH = getHeight(node.right);
  
  if(Math.abs(leftH - rightH) <= 1 && isTreeBalanced(node.left) && isTreeBalanced(node.right)) {
    return true;
  }
  
  return false;
}

function getHeight(node) {
  if(!node) {
    return 0;
  }
  
  return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}

// OR 

var isBalanced = function(root) {
  if(!root) {
    return true;
  }
  return isTreeBalanced(root) > -1;
};

function isTreeBalanced(node) {
  if(!node) {
    return 0;
  }  
  
  let left = isTreeBalanced(node.left);
  if(left === -1) {
    return -1;
  }
  
  let right = isTreeBalanced(node.right);
  if(right === -1 || Math.abs(left-right) > 1) {
    return -1;
  }
  
  return 1 + Math.max(left, right);
}