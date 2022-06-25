var uniquePaths = function(m, n) {
  let grid = Array(n).fill(1);
  

  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      grid[c] += grid[c - 1];
    }
  }
 
  return grid.at(-1); 


};

