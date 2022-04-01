/**
 * @param {character[][]} grid
 * @return {number}
 */




var numIslands = function(grid) {
  if (grid.length === 0) return 0;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],  
  ]
  
  let count = 0;
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        const q = new Queue();
        q.enqueue([i, j]);
        grid[i][j] = "0";
        
        while (q.size() > 0) {
          const [cR, cC] = q.dequeue();
          for (let d = 0; d < directions.length; d++) {
            let currentD = directions[d];
            console.log(currentD)
            let nextR = cR + currentD[0];
            let nextC = cC + currentD[1];
            
            if (nextR < 0 || nextR > grid.length - 1 || nextC < 0 || nextC > grid[0].length - 1) {
              continue;
            }

            if (grid[nextR][nextC] === "1") {
              q.enqueue([nextR, nextC]);
              grid[nextR][nextC] = "0";
            }  
          }
          
        }
      }
    }
  }
  
  return count;
    
};