// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26

// Given a non-empty string containing only digits, determine the total number of ways to decode it.

// Example 1:
// Input: "12"
// Output: 2
// Explanation: It could be decoded as "AB" (1 2) or "L" (12).

// Example 2:
// Input: "226"
// Output: 3
// Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

public class Solution {
  public int NumDecodings(string s) {
    if(s == null || s.Length == 0) return 0;
    if(s.Length == 1) return s[0] != '0' ? 1 : 0;
    
    var dp2 = 1; // Two away from current
    var dp1 = s[0] != '0' ? 1 : 0; // One away from current
    var sum = 0;
    
    for(var i = 1; i < s.Length; i++) {      
      sum = 0;
      var sing = Int32.Parse(s.Substring(i, 1));
      var doub = Int32.Parse(s.Substring(i-1, 2));
      
      if(sing >= 1 && sing <= 9) sum += dp1;      
      if(doub >= 10 && doub <= 26) sum += dp2;
      
      dp2 = dp1;
      dp1 = sum;
    }
    
    return sum;
  }
}