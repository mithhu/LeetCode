/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const R = board.length;
  const C = board[0].length;
  

  
  function dfs(r, c, idx) {
    if (idx === word.length) {
      return true;
    }
    
    if (r < 0 || c < 0 || r >= R || c >= C || board[r][c] !== word[idx]) {
      return false;
    }
    
   
    
    let temp = board[r][c];
    board[r][c] = "#";
    let res = dfs(r + 1, c, idx + 1) || dfs(r - 1, c, idx + 1) || dfs(r, c + 1, idx + 1) || dfs(r, c - 1, idx + 1);
    board[r][c] = temp;
    return res;
  }
  
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (board[r][c] === word[0]) {
        if (dfs(r, c, 0)) {
          return true;
        }
      }
    }
  }
  
  return false;
    
};