// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

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
  public TreeNode BuildTree(int[] preorder, int[] inorder) {
    return RecursiveBuild(preorder, inorder, 0, preorder.Length, 0);
  }
  
  public TreeNode RecursiveBuild(int[] preorder, int[] inorder, int left, int right, int rootInd) {
    if(left > right || rootInd >= inorder.Length) return null;
    var root  = new TreeNode(preorder[rootInd]);
    
    int i;
    for(i = left; i <= right; i++) {
      if(inorder[i] == root.val) break;
    }
    
    root.left = RecursiveBuild(preorder, inorder, left, i-1, rootInd+1);
    root.right = RecursiveBuild(preorder, inorder, i+1, right, rootInd+1+i-left);
    
    return root;
  }
}