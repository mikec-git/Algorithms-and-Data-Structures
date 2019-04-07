// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
//     ...

// Example 1:
// Input: "A"
// Output: 1

// Example 2:
// Input: "AB"
// Output: 28

// Example 3:
// Input: "ZY"
// Output: 701

public class Solution {
  public int TitleToNumber(string s) {
    var result = 0;
    
    foreach(var c in s) {
      result = result * 26 + (char.ToUpper(c) - 65 + 1);
    }
    
    return result;
  }
}