// Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// Example 1:
// Input: "abc"
// Output: 3

// Explanation: Three palindromic strings: "a", "b", "c". 

// Example 2:
// Input: "aaa"
// Output: 6

// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

// Note:
// The input string length won't exceed 1000.

public class Solution {
  public int CountSubstrings(string s) {
    var count = 0;
    for(var i = 0; i < s.Length; i++) {
      for(var j = 0; j < 2; j++) {
        var k = i;
        var m = j + i;
        while(k >= 0 && m < s.Length) {
          if(s[k--] == s[m++]) count++;
          else break;
        }
      }
    }
    
    return count;
  }
}

// OR 

public class Solution {
  public int CountSubstrings(string s) {
    var matrix = new bool[s.Length,s.Length];
    var count = 0;
    for(var i = 0; i < s.Length; i++) {
      for(var j = 0; j < s.Length-i; j++) {
        var k = i + j;
        if(j == k || k - j == 1 && s[j] == s[k]  || s[j] == s[k] && matrix[j+1, k-1]) {
          matrix[j, k] = true;
          count++;
        }
      }  
    }
  }
}