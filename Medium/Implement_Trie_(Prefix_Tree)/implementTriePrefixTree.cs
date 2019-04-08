// Implement a trie with insert, search, and startsWith methods.

// Example:

// Trie trie = new Trie();

// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");   
// trie.search("app");     // returns true

// Note:
// You may assume that all inputs are consist of lowercase letters a-z.
// All inputs are guaranteed to be non-empty strings.

public class Trie {
  public class TrieNode {
    public Dictionary<char, TrieNode> map;
    public bool isWord;
    
    public TrieNode() {
      map = new Dictionary<char, TrieNode>();
      isWord = false;
    }
  }
  
  private TrieNode root;
  
  /** Initialize your data structure here. */
  public Trie() {
    root = new TrieNode();
  }

  /** Inserts a word into the trie. */
  public void Insert(string word) {
    var temp = root;
    foreach(char letter in word) {
      if(!temp.map.ContainsKey(letter)) temp.map[letter] = new TrieNode();
      temp = temp.map[letter];
    }
    
    if(!temp.isWord) temp.isWord = true;    
  }

  /** Returns if the word is in the trie. */
  public bool Search(string word) {
    var temp = root;
    foreach(char letter in word) {
      if(!temp.map.ContainsKey(letter)) return false;
      temp = temp.map[letter];
    }
    
    return temp.isWord;
  }

  /** Returns if there is any word in the trie that starts with the given prefix. */
  public bool StartsWith(string prefix) {
    var temp = root;
    foreach(char letter in prefix) {
      if(!temp.map.ContainsKey(letter)) return false;
      temp = temp.map[letter];
    }
    
    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.Insert(word);
 * bool param_2 = obj.Search(word);
 * bool param_3 = obj.StartsWith(prefix);
 */