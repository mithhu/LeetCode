/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let col = new Set();
  let posDiag = new Set();
  let negDiag = new Set();
  
  let res = [];
  let board = Array(n).fill().map(() => Array(n).fill("."));
  
  
  function backTrack(r) {
    if (r === n) {
      console.log(board)
      let copy = board.map((el) => el.join(""))
      res.push(copy);
      return;
    }
    
    for (let c = 0; c < n; c++) {
      if (col.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) {
        continue;
      } 
      
      col.add(c);
      posDiag.add(r + c);
      negDiag.add(r - c);
      board[r][c] = "Q";
      backTrack(r + 1);
      col.delete(c);
      posDiag.delete(r + c);
      negDiag.delete(r - c);
      board[r][c] = ".";
    }
  }
  backTrack(0);
  return res;
    
};