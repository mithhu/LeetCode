/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let fresh = 0;
  let times = 0;
  let R = grid.length;
  let C = grid[0].length;
  let q = [];
  
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (grid[r][c] === 2) {
        q.push([r, c]);
      } else if (grid[r][c] === 1) {
        fresh++;
      }
    }
  }
  
  let dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  
  while (fresh && q.length) {
    let qlen = q.length;
    while (qlen) {
      let [r, c] = q.shift();
      for (let [dr, dc] of dir) {
        let nr = dr + r;
        let nc = dc + c;
        if (nr < 0 || nc < 0 || nr >= R || nc >= C || grid[nr][nc] !== 1) {
            continue;
        }
        grid[nr][nc] = 2;
        q.push([nr, nc]);
        fresh--;
      }
      qlen--;
    }
    times++;
  }
  
  return fresh ? -1 : times;
    
};