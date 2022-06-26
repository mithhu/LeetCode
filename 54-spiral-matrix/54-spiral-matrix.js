/**
 * @param {number[][]} matrix
 * @return {number[]}
 */



var spiralOrder = function(matrix) {
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  let res = [];
  
  while (left <= right && top <= bottom) {
    //top left to top right
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }
    top++;

    //top right to bottom right
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;
    
    if (!(left <= right && top <= bottom)) {
      break;
    }
   
    
    //bottom right to bottom left
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i])
    }
    bottom--;

    //bottom left to top left
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }

  return res;
  
  
    
};

