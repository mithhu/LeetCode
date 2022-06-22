/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
  let ROWS = rooms.length;
  let COLS = rooms[0].length;
  let visit = new Set();
  
  let q = new Queue();
  
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (rooms[i][j] === 0) {
        q.enqueue([i, j]);
      }
    }
  }
  
  let dist = 0;
  
  let dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  
  while (q.size() > 0) {
    let len = q.size();
    for (let i = 0; i < len; i++) {   
      let [r, c] = q.dequeue();
      // visit.add(`${r}*${c}`);
      rooms[r][c] = dist;
      
      for (let [dr, dc] of dir) {
        let nr = dr + r;
        let nc = dc + c;
        
        if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS ||  visit.has(`${nr}*${nc}`) || rooms[nr][nc] === -1 || rooms[nr][nc] === 0
           ) {
          continue;
        }
        q.enqueue([nr, nc]);
        visit.add(`${nr}*${nc}`)
      }
    }
    dist += 1;
  }
    
};