/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let R = grid.length;
  let C = grid[0].length;
  let area = 0;
  
  function dfs(r, c) {
    if (r < 0 || r >= R || c < 0 || c >= C || grid[r][c] === 0) {
      return 0;
    }
    grid[r][c] = 0;
    return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1); 
  }
  
  
  
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (grid[r][c] === 1) {
        area = Math.max(area, dfs(r, c));
      }
    }
  }
  
  return area;
  
    
};