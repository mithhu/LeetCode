/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let rows = {};
  let cols = {};
  let squares = {};
  
  for (let i = 0; i < board.length; i++) {
    rows[i] = new Set();
    cols[i] = new Set();
  }
  
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      squares[`${Math.floor(r / 3)}*${Math.floor(c / 3)}`] = new Set();
    }
  }
  
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === ".") {
        continue;
      } 
      if (rows[r].has(board[r][c]) ||
         cols[c].has(board[r][c]) ||
         squares[`${Math.floor(r / 3)}*${Math.floor(c / 3)}`].has(board[r][c])) {
        return false;
      } else {
        rows[r].add(board[r][c]);
         cols[c].add(board[r][c]);
         squares[`${Math.floor(r / 3)}*${Math.floor(c / 3)}`].add(board[r][c]);
      }
    }
  }
  
  return true;
    
};