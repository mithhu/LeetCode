/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
  let N = grid.length;
  let visited = new Set();
  let minH = new MinPriorityQueue({priority: (elem) => elem[0]}); // t, r, c

  minH.enqueue([grid[0][0], 0, 0]);
  let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  
  visited.add(`0*0`);
  
  while (minH.size()) {
    let [t, r, c] = minH.dequeue().element;
    if (r === N - 1 && c === N - 1) return t;
    
    for (let [dr, dc] of directions) {
      let neiR = dr + r;
      let neiC = dc + c;
      if (neiR < 0 || neiC < 0 || neiR === N || neiC === N || visited.has(`${neiR}*${neiC}`)) {
        continue;
      }
      visited.add(`${neiR}*${neiC}`);
      minH.enqueue([Math.max(t, grid[neiR][neiC]), neiR, neiC]);
    }
  }
    
};