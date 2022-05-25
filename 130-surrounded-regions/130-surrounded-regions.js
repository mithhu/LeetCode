/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  let ROWS = board.length;
  let COLS = board[0].length;
  
  function dfs(r, c) {    
    if (r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] !== "O") {
      return;
    }
    board[r][c] = "T";
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }
  
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (board[r][c] === "O" && (r === 0 || r === ROWS - 1 || c === 0 || c === COLS - 1)) {
        dfs(r, c);
      }
    }
  }
  
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (board[r][c] === "O") {
        board[r][c] = "X";
      } else if (board[r][c] === "T") {
        board[r][c] = "O"
      }
    }
  }
    
};