// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// Example:
// Given a binary tree 
//           1
//          / \
//         2   3
//        / \     
//       4   5    
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

// Note: The length of path between two nodes is represented by the number of edges between them.

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
  private int Max { get; set; } = 0;
  
  public int DiameterOfBinaryTree(TreeNode root) {
    GetDiameter(root);
    return Max;
  }
  
  public int GetDiameter(TreeNode root) {
    if(root == null) return 0;
    var left = GetDiameter(root.left);
    var right = GetDiameter(root.right);
    Max = Math.Max(Max, left+right);
    return 1 + Math.Max(left, right);
  }
}
