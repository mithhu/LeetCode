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
      
      let topLeft = matrix[top][l + i];
      
      matrix[top][l + i] = matrix[bottom - i][l];
      
      matrix[bottom - i][l] = matrix[bottom][r - i];
      
      matrix[bottom][r - i] = matrix[top + i][r];
      
      matrix[top + i][r] = topLeft;
      
    }
    l++;
    r--;
  }
    
  return matrix;
};