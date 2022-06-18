/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
  let atl = new Set();
  let pac = new Set();
  let R = heights.length;
  let C = heights[0].length;
  
  //first and last row
  for (let c = 0; c < C; c++) {
    //pac
    dfs(0, c, pac, heights[0][c], heights);
    //atl
    dfs(R - 1, c, atl, heights[R - 1][c], heights);
  }
  
  //first and alst col
  for (let r = 0; r < R; r++) {
    dfs(r, 0, pac, heights[r][0], heights);
    dfs(r, C - 1, atl, heights[r][C - 1], heights); 
  }
  
  let res = [];
  
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (atl.has(`${r}*${c}`) && pac.has(`${r}*${c}`)) {
        res.push([r, c]);
      }
    }
  }
  
  return res;
    
};


function dfs(r, c, set, prevH, heights) {
  if (r < 0 || r >= heights.length || c < 0 || c >= heights[0].length || set.has(`${r}*${c}`) || heights[r][c] < prevH) {
    return;
  }
  set.add(`${r}*${c}`);
  dfs(r + 1, c, set, heights[r][c], heights);
  dfs(r - 1, c, set, heights[r][c], heights);
  dfs(r, c + 1, set, heights[r][c], heights);
  dfs(r, c - 1, set, heights[r][c], heights);
}