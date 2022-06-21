/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  if (image[sr][sc] === newColor) {
    return image;
  }
  
  let source = image[sr][sc];
  
  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= image.length || c >= image[0].length || image[r][c] !== source) {
      return;
    }
    image[r][c] = newColor;
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  dfs(sr, sc);
  
  return image;

};