/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
  let ROWS = heights.length;
  let COLS = heights[0].length;
  let atl = new Set();
  let pac = new Set();
  
  //first and last row
  for (let c = 0; c < COLS; c++) {
    dfs(0, c, pac, heights[0][c], heights);
    dfs(ROWS - 1, c, atl, heights[ROWS - 1][c], heights);
  }

  //first and last col
  for (let r = 0; r < ROWS; r++) {
    dfs(r, 0, pac, heights[r][0], heights);
    dfs(r, COLS - 1, atl, heights[r][COLS - 1], heights);
  }
  
  

  //loop through the matrix and find common 
  const res = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (pac.has(`${r}*${c}`) && atl.has(`${r}*${c}`)) {
        res.push([r, c]); 
      }
    }
  
  }  
  
  return res;
  
};
  
  //dfs

function dfs(r, c, visited, prevH, heights) {
  if (r < 0 || r >= heights.length || c < 0 || c >= heights[0].length || visited.has(`${r}*${c}`) || heights[r][c] < prevH) {
    return;
  }
  visited.add(`${r}*${c}`);
  dfs(r + 1, c, visited, heights[r][c], heights);
  dfs(r - 1, c, visited, heights[r][c], heights);
  dfs(r, c + 1, visited, heights[r][c], heights);
  dfs(r, c - 1, visited, heights[r][c], heights);
}





