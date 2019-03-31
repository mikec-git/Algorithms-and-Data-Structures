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
  private List<int> results = new List<int>();
  public IList<int> InorderTraversal(TreeNode root) {
    var stack = new Stack<TreeNode>();
    var curr = root;
    
    while(curr != null || stack.Count > 0) {
      if(curr != null) {
        stack.Push(curr);
        curr = curr.left;
      } else {
        curr = stack.Pop();
        results.Add(curr.val);
        curr = curr.right;
      }
    }
    return results;
  }
}

// OR 

public class Solution {
  private List<int> results = new List<int>();
  public IList<int> InorderTraversal(TreeNode root) {
    if(root == null) return results;
    
    InorderTraversal(root.left);
    results.Add(root.val);
    InorderTraversal(root.right);
    return results;
  }
}