/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  function wordTraverse(i, j, idx) {
    if (idx === word.length) {
      return true;
    }
    
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || word[idx] !== board[i][j]) {
      return false;
    }
    
    let temp = board[i][j];
    board[i][j] = "#";
    let res = wordTraverse(i + 1, j, idx + 1) || wordTraverse(i - 1, j, idx + 1) || wordTraverse(i, j + 1, idx + 1) || wordTraverse(i, j - 1, idx + 1);
    board[i][j] = temp;
    return res;
  }
  
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] === word[0] && wordTraverse(r, c, 0)) {
        return true;
      }
    }
  }
  
  return false;
    
};