/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let l = 0;
  let r = matrix.length - 1; 
  
  while (l < r) {
    for (let i = 0; i < (r - l); i++) {
      let top = l;
      let bottom = r;

      let leftTop = matrix[top][l + i];

      //bottom left to top left
      matrix[top][l + i] = matrix[bottom - i][l];

      //bottom right to bottom left
      matrix[bottom - i][l] = matrix[bottom][r - i];

      //top right to bottom right
      matrix[bottom][r - i] = matrix[top + i][r];

      //move top left to top right
      matrix[top + i][r] = leftTop;
    }
  l++; 
  r--; 
  }

};
