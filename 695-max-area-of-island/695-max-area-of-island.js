/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxAreaOfIsland = function(grid) {
  if (grid.length === 0) return 0;
  let ROWS = grid.length;
  let COLS = grid[0].length;
  let count = 0;
  
  function dfs(r, c) {
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS || grid[r][c] === 0) return 0;
    grid[r][c] = 0;
    
    return 1 +  dfs(r + 1, c) +
    dfs(r - 1, c) +
    dfs(r, c + 1) +
    dfs(r, c - 1);
  }
  
  let area = 0;
  
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === 1) {
        area = Math.max(area, dfs(r, c))
      }
    }
  }
  
  return area;
    
};