// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 

// Input: 19
// Output: true

// Explanation: 
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

public class Solution {
  public bool IsHappy(int n) {
    int slow = n;
    int fast = n;
      
    do {
      slow = CycleDetect(slow);
      fast = CycleDetect(fast);
      fast = CycleDetect(fast);
    } while(slow != fast);
    
    return slow == 1;
  }
  
  public int CycleDetect(int num) {
    var sum = 0;
    int sq;
    
    while(num != 0) {
      sq = (num % 10) * (num % 10);
      sum += sq;
      num /= 10;
    }
    
    return sum;
  }
}