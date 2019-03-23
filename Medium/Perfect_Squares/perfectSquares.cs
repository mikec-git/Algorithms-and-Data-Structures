// Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

// Example 1:
// Input: n = 12
// Output: 3 
// Explanation: 12 = 4 + 4 + 4.

// Example 2:
// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.

public class Solution {
  public int NumSquares(int n) {
    var dp = new int[n+1];
    dp[0] = 0;
    
    for(int i = 1; i <= n; i++) {
      int sqrt = (int)Math.Sqrt(i);
      if(sqrt * sqrt == i) {
        dp[i] = 1;
        continue;
      }
      
      var min = Int32.MaxValue;
      for(var j = 1; j <= sqrt; j++) {
        // Works because it calculates one perfect square away from the next closest dp value
        min = Math.Min(min, dp[i-j*j] + 1);
      }
      dp[i] = min;
    }
    
    return dp[n];
  }
}