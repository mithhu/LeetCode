/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let R = matrix.length;
  let C = matrix[0].length;
  let topRow = false;

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (matrix[r][c] === 0) {
        matrix[0][c] = 0;
        
        if (r > 0) {
          matrix[r][0] = 0;
        } else {
          topRow = true;
        }
      }
    } 
  }
 
  for (let r = 1; r < R; r++) {
    for (let c = 1; c < C; c++) {
      if (matrix[r][0] === 0 || matrix[0][c] === 0) {
        matrix[r][c] = 0;
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let r = 0; r < R; r++) {
      matrix[r][0] = 0;
    }
  } 

  if (topRow) {
    for (let c = 0; c < C; c++) {
      matrix[0][c] = 0;
    }
  }
};
