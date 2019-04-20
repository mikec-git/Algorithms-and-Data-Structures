// Find the length of the longest substring T of a given string (consists of lowercase letters only) such that every character in T appears no less than k times.

// Example 1:
// Input:
// s = "aaabb", k = 3
// Output:
// 3
// The longest substring is "aaa", as 'a' is repeated 3 times.

// Example 2:
// Input:
// s = "ababbc", k = 2
// Output:
// 5
// The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.

// Sliding window method:
// -- find all sub-strings which have "u=1" unique character(s) and each character in the substring repeats at least "k" times
// -- find all sub-strings which have "u=2" unique character(s) and each character in the substring repeats at least "k" times
// -- ....
// -- find all sub-strings which have "u=26" unique character(s) and each character in the substring repeats at least "k" times
// -- and we're done! at u = 26, we're done. Take max of all the above valid substrings (by tracking with --max-- variable) -- that'll be our answer.

public class Solution {
  private int[] count;
  private int max;
  
  public int LongestSubstring(string s, int k) {
    int c, i, j, u, unique, kCount;
    
    for(u = 1; u <= 26; u++) {
      count = new int[26];
      unique = 0;
      i = 0;
      j = 0;
      kCount = 0;
      
      while(j < s.Length) {
        if(unique <= u) {
          c = s[j] - 'a';
          count[c]++;
          if(count[c] == 1) unique++;
          if(count[c] == k) kCount++;
          j++;
        } else {
          c = s[i] - 'a';
          count[c]--;
          if(count[c] == 0) unique--;
          if(count[c] == k-1) kCount--;
          i++;
        }
        
        if(unique == u && unique == kCount) max = Math.Max(max, j-i);
      }
    }
    
    return max;
  }
}