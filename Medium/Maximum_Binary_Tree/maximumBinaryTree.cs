// Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

// The root is the maximum number in the array.
// The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
// The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
// Construct the maximum tree by the given array and output the root node of this tree.

// Example 1:
// Input: [3,2,1,6,0,5]
// Output: return the tree root node representing the following tree:

//       6
//     /   \
//    3     5
//     \    / 
//      2  0   
//        \
//         1
// Note:
// The size of the given array will be in the range [1,1000].

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
  public TreeNode ConstructMaximumBinaryTree(int[] nums) {
    return MaximumTree(nums, 0, nums.Length-1);
  }
  
  public TreeNode MaximumTree(int[] nums, int start, int end) {
    if(start > end) return null;
    
    var maxI = FindMaxInd(nums, start, end);
    var root = new TreeNode(nums[maxI]);
    
    root.left = MaximumTree(nums, start, maxI-1);
    root.right = MaximumTree(nums, maxI+1, end);
    
    return root;
  }
  
  public int FindMaxInd(int[] nums, int start, int end) {
    var maxI = start;
    for(var i = start; i <= end; i++) {
      if(nums[i] > nums[maxI]) maxI = i;
    }
    return maxI;
  }
}