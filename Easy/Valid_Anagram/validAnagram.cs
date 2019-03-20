// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

public class Solution {
  public bool IsAnagram(string s, string t) {
    if(s.Length != t.Length) return false;
    
    var dict = new Dictionary<int,int>();
    for(var i = 0; i < s.Length; i++) {
      if(dict.ContainsKey(s[i])) dict[s[i]]++;
      else dict[s[i]] = 1;
    }
    
    for(var i = 0; i < t.Length; i++) {
      if(!dict.ContainsKey(t[i])) return false;
      dict[t[i]]--;
      if(dict[t[i]] < 0) return false;
    }
      
    return true;
  }
}