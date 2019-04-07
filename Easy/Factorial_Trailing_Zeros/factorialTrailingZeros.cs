// Given an integer n, return the number of trailing zeroes in n!.

// Example 1:
// Input: 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.

// Example 2:
// Input: 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.

// Note: Your solution should be in logarithmic time complexity.

public class Solution {
  public int TrailingZeroes(int n) {
    if(n < 5) return 0;
    
    // 5*2 adds a zero, so need to count number of 5's. 2's are numerous and always more than 5's.
    return n/5 + TrailingZeroes(n/5);
  }
}