// Given an integer, return its base 7 string representation.

// Example 1:
// Input: 100
// Output: "202"

// Example 2:
// Input: -7
// Output: "-10"
// Note: The input will be in range of [-1e7, 1e7].

public class Solution {
  public string ConvertToBase7(int num) {
    if(num == 0) return "0";
    
    var isNeg = num < 0;
    var base7 = new StringBuilder();
    num = Math.Abs(num);
    
    while(Math.Abs(num) > 0) {
      var mod = num % 7;
      num = num/7;
      base7.Insert(0, mod.ToString());
    }
    
    return isNeg ? base7.Insert(0,"-").ToString() : base7.ToString();
  }
}