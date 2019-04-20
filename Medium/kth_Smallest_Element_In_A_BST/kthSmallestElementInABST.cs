// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

// Note: 
// You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

// Example 1:
// Input: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// Output: 1

// Example 2:
// Input: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// Output: 3

// Follow up:
// What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

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
  private int val;
  private int count;
  
  public int KthSmallest(TreeNode root, int k) {
    count = 0;
    FindNode(root, k);
    return val;
  }
  
  private void FindNode(TreeNode root, int k) {
    if(root == null) return;
    
    FindNode(root.left, k);
    
    count++;    
    if(count == k) {
      val = root.val;
      return;
    }
    
    FindNode(root.right, k);
  }
}