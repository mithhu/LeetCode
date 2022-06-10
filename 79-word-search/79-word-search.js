/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  
  function wordTraverseDfs(i, j, idx) {
    if (idx === word.length) {
      return true;
    }
    
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || word[idx] !== board[i][j]) {
      return false;
    }
    
    let temp = board[i][j];
    board[i][j] = "#";
    
    let res = wordTraverseDfs(i + 1, j, idx + 1) || wordTraverseDfs(i - 1, j, idx + 1) || wordTraverseDfs(i, j + 1, idx + 1) || wordTraverseDfs(i, j - 1, idx + 1);
    board[i][j] = temp;
    return res;
  }
  
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0] && wordTraverseDfs(i, j, 0)) {
        return true;
      }
    }
  }
  
  return false;
    
};