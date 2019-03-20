// On an 8 x 8 chessboard, there is one white rook.  There also may be empty squares, white bishops, and black pawns.  These are given as characters 'R', '.', 'B', and 'p' respectively. Uppercase characters represent white pieces, and lowercase characters represent black pieces.

// The rook moves as in the rules of Chess: it chooses one of four cardinal directions (north, east, west, and south), then moves in that direction until it chooses to stop, reaches the edge of the board, or captures an opposite colored pawn by moving to the same square it occupies.  Also, rooks cannot move into the same square as other friendly bishops.

// Return the number of pawns the rook can capture in one move.

// Example 1:
// Input: [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
// Output: 3
// Explanation: 
// In this example the rook is able to capture all the pawns.

// Example 2:
// Input: [[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
// Output: 0
// Explanation: 
// Bishops are blocking the rook to capture any pawn.

// Example 3:
// Input: [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]
// Output: 3
// Explanation: 
// The rook can capture the pawns at positions b5, d6 and f5. 

// Note:
// board.length == board[i].length == 8
// board[i][j] is either 'R', '.', 'B', or 'p'
// There is exactly one cell with board[i][j] == 'R'

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {  
  let captured = 0;
  
  for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
      if(board[i][j] === 'R') {
        let tempI = i;
        let tempJ = j;
        for(let k = -1; k < 2; k+=2) {
          i = tempI;
          while(i+k > 0 && i+k < 8 && board[i+k][j] !== 'B') {
            i+=k;
            if(board[i][j] === 'B') break;
            else if(board[i][j] === 'p') {
              captured++; 
              break;
            }
          }          
        }
        
        i = tempI;
        for(let k = -1; k < 2; k+=2) {
          j = tempJ;
          while(j+k > 0 && j+k < 8 && board[i][j+k] !== 'B') {
            j+=k;
            if(board[i][j] === 'B') break;
            else if(board[i][j] === 'p') {
              captured++; 
              break;
            }
          }          
        }
        break;
      }
    }  
  }
  return captured;
};