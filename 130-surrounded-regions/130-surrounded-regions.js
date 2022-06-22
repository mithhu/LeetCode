/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  let R = board.length;
  let C = board[0].length;
  
  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= R || c >= C || board[r][c] !== "O") {
      return;
    }
    board[r][c] = "I";
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }
  
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (board[r][c] === "O" && (r === 0 || c === 0 || r === R - 1 || c === C - 1)) {
        dfs(r, c);
      }
    }
  }
  
 for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (board[r][c] === "O") {
        board[r][c] = "X"
      } else if (board[r][c] === "I") {
        board[r][c] = "O"
      }
    }
 }
    
};