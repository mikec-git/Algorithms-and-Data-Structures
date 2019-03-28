// Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.
// A region is captured by flipping all 'O's into 'X's in that surrounded region.

// Example:

// X X X X
// X O O X
// X X O X
// X O X X

// After running your function, the board should be:

// X X X X
// X X X X
// X X X X
// X O X X

// Explanation:
// Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.

public class Solution {  
  public void Solve(char[][] board) {
    if(board == null || board.Length == 0) return;
        
    for(var i = 0; i < board.Length; i++) {
      FindConnected(board, i, 0);
      if(board[0].Length > 1) FindConnected(board, i, board[0].Length-1);
    }
    
    for(var j = 0; j < board[0].Length; j++) {
      FindConnected(board, 0, j);
      if(board.Length > 1) FindConnected(board, board.Length-1, j);
    }
        
    for(var i = 0; i < board.Length; i++) {
      for(var j = 0; j < board[0].Length; j++) {
        if(board[i][j] == 'O') board[i][j] = 'X';
        else if(board[i][j] == '1') board[i][j] = 'O';
      }
    }
  }
  
  public void FindConnected(char[][] board, int i, int j) {
    if(board[i][j] != 'X' && board[i][j] != '1') {
      if(board[i][j] == 'O') board[i][j] = '1';

      if(i < board.Length-1) FindConnected(board, i+1, j);
      if(i > 1) FindConnected(board, i-1, j);
      if(j < board[0].Length-1) FindConnected(board, i, j+1);
      if(j > 1) FindConnected(board, i, j-1);      
    }
  }
}