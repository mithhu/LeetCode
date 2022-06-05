/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  let ROWS = matrix.length;
  let COLS = matrix[0].length;
  
  let dp = {};
  
  function dfs(i, j, prevVal) {
    if (i < 0 || i >= ROWS || j < 0 || j >= COLS || matrix[i][j] <= prevVal) {
      return 0;
    }
    
    if (`${i}*${j}` in dp) {
      return dp[`${i}*${j}`];
    }
    
    let res = 1;
    res = Math.max(res, 1 + dfs(i + 1, j, matrix[i][j]));
    res = Math.max(res, 1 + dfs(i - 1, j, matrix[i][j]));
    res = Math.max(res, 1 + dfs(i, j + 1, matrix[i][j]));
    res = Math.max(res, 1 + dfs(i, j - 1, matrix[i][j]));
    dp[`${i}*${j}`] = res;
    return res;
  }
  
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      dfs(r, c, -1)
    }
  }  
  return Math.max(...Object.values(dp))
};