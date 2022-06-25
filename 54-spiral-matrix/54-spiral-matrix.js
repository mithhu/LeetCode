var spiralOrder = function(matrix) {
  let res = [];
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;

  while (left <= right && top <= bottom) {
    //left to right
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;

    //top to bottom
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;

   if (!(left <= right && top <= bottom)) {
     break;
   }

   //right to left
   for (let i = right; i >= left; i--) {
     res.push(matrix[bottom][i])
   }
   bottom--;

   //bottom to top
   for (let i = bottom; i >= top; i--) {
     res.push(matrix[i][left]);
   }
   left++;
  }

  return res;

}
