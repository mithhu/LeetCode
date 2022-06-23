/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  let cache = {};
  let R = matrix.length;
  let C = matrix[0].length;
  let max = -Infinity;
  
  function dfs(r, c, prevVal) {
    if (r < 0 || r === R || c < 0 || c === C || matrix[r][c] <= prevVal) {
      return 0;
    }
    
    if (`${r}_${c}` in cache) {
      return cache[`${r}_${c}`];
    }
    
    let res = 1;
    res = Math.max(res, 1 + dfs(r + 1, c, matrix[r][c]));
    res = Math.max(res, 1 + dfs(r - 1, c, matrix[r][c]));
    res = Math.max(res, 1 + dfs(r, c + 1 , matrix[r][c]));
    res = Math.max(res, 1 + dfs(r, c - 1, matrix[r][c]));
    cache[`${r}_${c}`] = res;
    max = Math.max(max, res);
    return res;
  } 
  
        

  
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      dfs(i, j, -1);
    }
  }
  
  return max;
};