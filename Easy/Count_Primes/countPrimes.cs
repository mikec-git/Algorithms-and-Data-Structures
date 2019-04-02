// Count the number of prime numbers less than a non-negative number, n.

// Example:
// Input: 10
// Output: 4

// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

public class Solution {
  public int CountPrimes(int n) {
    var count = 0;
    var primes = new bool[n];
    
    for(var i = 2; i < n; i++) {
      if(primes[i] == false) {
        count++;
        for(var factor = 2; factor*i < n; factor++) {
          if(!primes[factor*i]) primes[factor*i] = true;
        }
      }
    }
    
    return count;
  }
}