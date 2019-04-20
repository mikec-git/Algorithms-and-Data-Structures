public class Solution {  
  public int FirstUniqChar(string s) {
    var dict = new Dictionary<char,int>();
    
    for(var i = 0; i < s.Length; i++) {
      if(dict.ContainsKey(s[i])) dict[s[i]]++;
      else dict[s[i]] = 1;
    }
    
    for(var i = 0; i < s.Length; i++) {
      if(dict[s[i]] == 1) return i;
    }
        
    return -1;
  }
}