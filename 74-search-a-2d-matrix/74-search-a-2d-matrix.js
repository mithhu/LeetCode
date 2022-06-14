/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let top = 0;
  let bottom = matrix.length - 1;
  
  while (top <= bottom) {
    let row = top + Math.floor((bottom - top) / 2);
    console.log(row)
  
    if (matrix[row][matrix[0].length - 1] < target) {
      top = row + 1;
    } else if (matrix[row][0] > target) {
      bottom = row - 1;
    } else {
      break;
    }
  }
  if (!(top <= bottom)) {
    return false;
  }
  
  let row = top + Math.floor((bottom - top) / 2);
  let left = 0;
  let right = matrix[0].length - 1;
  
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (matrix[row][mid] < target) {
      left = mid + 1;
    } else if (matrix[row][mid] > target) {
      right = mid - 1;
    } else {
      return true;
    }
  }
  
  return false;
  

    
};