// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

// Example 1:
// Input: "aba"
// Output: True

// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.

// Note:
// The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

public class Solution {
  public bool ValidPalindrome(string s) {
    var i = 0;
    var j = s.Length-1;
    
    while(i <= j) {
      if(s[i] != s[j]) break;
      if(i == j-1 || i+1 == j-1) return true;
      i++;
      j--;
    }
    
    var jTemp = j-1;
    var iTemp = i;
    while(iTemp <= jTemp) {
      if(s[iTemp] != s[jTemp]) break;
      if(iTemp == jTemp || iTemp == jTemp-1) return true;
      iTemp++;
      jTemp--;
    }
    
    i++;
    while(i <= j) {
      if(s[i] != s[j]) return false;
      if(i == j || i == j-1) return true;
      i++;
      j--;
    }
    
    return false;
  }  
}