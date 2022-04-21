/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  let res = [];
  
  
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;
    
    if (!(left <= right && top <= bottom)) {
      break;
    }
    
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i])
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left])
    }
    left++;
  }
  
  return res;
};