// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example:
// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.

public class Solution {
  private bool[][] seen;
  public bool Exist(char[][] board, string word) {
    seen = new bool[board.Length][];
    for(var i = 0; i < board.Length; i++) {
      seen[i] = new bool[board[0].Length];
    }
    
    for(var i = 0; i < board.Length; i++) {
      for(var j = 0; j < board[0].Length; j++) {
        if(board[i][j] == word[0] && CheckIfWord(board, word, i, j, 0)) {
          return true;
        }
      } 
    }
    
    return false;
  }
  
  public bool CheckIfWord(char[][] board, string word, int i, int j, int index) {
    if(index == word.Length) return true;    
    if(i < 0 || i >= board.Length || j < 0 || j >= board[0].Length || seen[i][j] || board[i][j] != word[index]) return false;
    
    seen[i][j] = true;
    var result = CheckIfWord(board, word, i, j+1, index+1) || 
      CheckIfWord(board, word, i+1, j, index+1) || 
      CheckIfWord(board, word, i, j-1, index+1) || 
      CheckIfWord(board, word, i-1, j, index+1);
    
    seen[i][j] = false;
    return result;
  }
}