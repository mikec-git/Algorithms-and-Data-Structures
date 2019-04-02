// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7

// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

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
  public IList<IList<int>> LevelOrder(TreeNode root) {
    var result = new List<IList<int>>();
    if(root == null) return result;
    
    var q = new Queue<TreeNode>();
    q.Enqueue(root);
    
    while(q.Count > 0) {
      var count = q.Count;
      var curLevel = new List<int>();
      while(count-- > 0) {
        if(q.Peek().left != null) q.Enqueue(q.Peek().left);
        if(q.Peek().right != null) q.Enqueue(q.Peek().right);
        curLevel.Add(q.Dequeue().val);
      }
      result.Add(curLevel);
    }
    return result;
  }  
}