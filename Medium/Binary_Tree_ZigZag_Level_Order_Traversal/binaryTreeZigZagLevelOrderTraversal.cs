// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7

// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
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
  public IList<IList<int>> ZigzagLevelOrder(TreeNode root) {
    var result = new List<IList<int>>();
    if(root == null) return result;
    
    var q = new Queue<TreeNode>();
    q.Enqueue(root);
    var reverse = false;
    
    while(q.Count > 0) {
      var count = q.Count;
      var level = new List<int>();
      while(count-- > 0) {
        if(q.Peek().left != null) q.Enqueue(q.Peek().left);
        if(q.Peek().right != null) q.Enqueue(q.Peek().right);
        if(reverse) level.Insert(0, q.Dequeue().val);
        else level.Add(q.Dequeue().val);
      }
      result.Add(level);
      reverse = !reverse;
    }
    
    return result;
  }
}