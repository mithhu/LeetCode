/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
  //pac
  //atl
  let R = heights.length;
  let C = heights[0].length;
  let atl = new Set();
  let pac = new Set();
  
  //first and last row
  for (let c = 0; c < C; c++) {
    dfs(0, c, heights[0][c], pac);
    dfs(R - 1, c, heights[R - 1][c], atl);
  }
  
  
  //first and last col
  for (let r = 0; r < R; r++) {
    dfs(r, 0, heights[r][0], pac);
    dfs(r, C - 1, heights[r][C - 1], atl);
  }
  
  
  function dfs(r, c, prevH, set) {
    if (r < 0 || c < 0 || r >= R || c >= C || prevH > heights[r][c] || set.has(`${r}*${c}`)) {
      return false;
    }
    set.add(`${r}*${c}`);
    dfs(r + 1, c, heights[r][c], set);
    dfs(r - 1, c, heights[r][c], set);
    dfs(r, c + 1, heights[r][c], set);
    dfs(r, c - 1, heights[r][c], set); 
  }
  
  let res = [];
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (atl.has(`${r}*${c}`) && pac.has(`${r}*${c}`)) {
        res.push([r, c])
      }
    }
  }
  
  return res;
  
  
};