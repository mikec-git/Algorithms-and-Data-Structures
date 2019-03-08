// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],
// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return tree = arrToBST(nums, 0, nums.length-1);
};
  
function arrToBST(nums, start, end) {
  if(start > end) {
    return null;
  }

  let mid = Math.floor((start+end)/2);  
  let tree = new TreeNode(nums[mid]);

  tree.left = arrToBST(nums, start, mid-1);
  tree.right = arrToBST(nums, mid+1, end);
  return tree;
}
