/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let grid = Array(m).fill().map(() => Array(n).fill(0));
  
  for (let c = 0; c < n; c++) {
    grid[0][c] = 1;
  }
  
  for (let r = 0; r < m; r++) {
    grid[r][0] = 1;
  }
    
  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      grid[r][c] = grid[r-1][c] + grid[r][c-1];
    }
  }

  return grid[m - 1][n - 1];
};