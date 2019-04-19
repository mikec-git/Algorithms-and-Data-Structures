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
var maxAncestorDiff = function(root) {
  return maxDiff(root, root.val, root.val);
};

const maxDiff = (root, max, min) => {
  if(!root) return max-min;
  
  let newMax = root.val > max ? root.val : max;
  let newMin = root.val < min ? root.val : min;
  return Math.max(maxDiff(root.left, newMax, newMin), maxDiff(root.right, newMax, newMin));
}