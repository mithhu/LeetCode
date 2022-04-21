/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let top = 0;
  let bottom = matrix.length;
  let left = 0;
  let right = matrix[0].length;
  let res = [];
  
  
  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    
    for (let i = top; i < bottom; i++) {
      res.push(matrix[i][right - 1]);
    }
    right--;
    
    if (!(left < right && top < bottom)) {
      break;
    }
    
    for (let i = right - 1; i > left - 1; i--) {
      res.push(matrix[bottom - 1][i])
    }
    bottom--;
    for (let i = bottom - 1; i > top - 1; i--) {
      res.push(matrix[i][left])
    }
    left++;
  }
  
  return res;
};