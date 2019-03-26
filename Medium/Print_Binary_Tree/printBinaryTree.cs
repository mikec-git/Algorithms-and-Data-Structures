// Print a binary tree in an m*n 2D string array following these rules:

// The row number m should be equal to the height of the given binary tree.
// The column number n should always be an odd number.
// The root node's value (in string format) should be put in the exactly middle of the first row it can be put. The column and the row where the root node belongs will separate the rest space into two parts (left-bottom part and right-bottom part). You should print the left subtree in the left-bottom part and print the right subtree in the right-bottom part. The left-bottom part and the right-bottom part should have the same size. Even if one subtree is none while the other is not, you don't need to print anything for the none subtree but still need to leave the space as large as that for the other subtree. However, if two subtrees are none, then you don't need to leave space for both of them.
// Each unused space should contain an empty string "".
// Print the subtrees following the same rules.

// Example 1:
// Input:
//      1
//     /
//    2
// Output:
// [["", "1", ""],
//  ["2", "", ""]]

// Example 2:
// Input:
//      1
//     / \
//    2   3
//     \
//      4
// Output:
// [["", "", "", "1", "", "", ""],
//  ["", "2", "", "", "", "3", ""],
//  ["", "", "4", "", "", "", ""]]

// Example 3:
// Input:
//       1
//      / \
//     2   5
//    / 
//   3 
//  / 
// 4 
// Output:
// [["",  "",  "", "",  "", "", "", "1", "",  "",  "",  "",  "", "", ""]
//  ["",  "",  "", "2", "", "", "", "",  "",  "",  "",  "5", "", "", ""]
//  ["",  "3", "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]
//  ["4", "",  "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]]

// Note: The height of binary tree is in the range of [1, 10].

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
  private List<IList<string>> results;
  
  public IList<IList<string>> PrintTree(TreeNode root) {
    var depth = DepthTree(root);
    var arrLen = (int)Math.Pow(2,depth)-1;
    results = CreateArray(arrLen, depth);
    recursive(root, 0, 0, arrLen);
    
    return results;
  }
  
  public void recursive(TreeNode node, int row, int left, int right) {
    if(node == null) return;
    
    var mid = (right+left)/2;
    results[row][mid] = "" + node.val;
    
    recursive(node.left, row+1, left, mid);
    recursive(node.right, row+1, mid, right);
  }
  
  public List<IList<string>> CreateArray(int len, int depth) {
    var arr = new List<IList<string>>();
    for(int d = 0; d < depth; d++) {      
      var a = new List<string>();
      for(int i = 0; i < len; i++) {
        a.Add("");
      }  
      arr.Add(a);
    }
    return arr;
  }
  
  public int DepthTree(TreeNode root) {
    return root == null ? 0 : 1 + Math.Max(DepthTree(root.left), DepthTree(root.right));
  }
}