/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
};

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1] //left
]

var numIslands = function(matrix) {    
  if(matrix.length === "0") return 0;
  let islandCount = 0;

  for(let row = 0; row < matrix.length; row++) {
    for(let col = 0; col < matrix[0].length; col++) {
      if(matrix[row][col] === "1") {
        islandCount++;
        matrix[row][col] = "0";
        const queue = [];
        queue.push([row, col]);

        while(queue.length) {
          const currentPos = queue.shift();
          const currentRow = currentPos[0];
          const currentCol = currentPos[1];

          for(let i = 0; i < directions.length; i++) {
            const currentDir = directions[i];
            const nextRow = currentRow + currentDir[0];
            const nextCol = currentCol + currentDir[1];

            if(nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length) continue;

            if(matrix[nextRow][nextCol] === "1") {
              queue.push([nextRow, nextCol]);
              matrix[nextRow][nextCol] = "0";
            }
          }
        }
      }
    }
  }

  return islandCount;
}
