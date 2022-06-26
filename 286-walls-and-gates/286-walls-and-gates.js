/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
  let R = rooms.length;
  let C = rooms[0].length;
  let visit = new Set();
  let q = new Queue();
  
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (rooms[r][c] === 0) {
        q.enqueue([r, c]);
      }
    }
  }
  
  let dist = 0;
  let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  
  while (q.size()) {
    let len = q.size(); 
    for (let i = 0; i < len; i++) {
      let [r, c] = q.dequeue();
      visit.add(`${r}_${c}`);
      rooms[r][c] = dist;
      
      for (let [dr, dc] of dir) {
        let nr = dr + r;
        let nc = dc + c;
        if (nr < 0 || nc < 0 || nr >= R || nc >= C || visit.has(`${nr}_${nc}`) || rooms[nr][nc] === -1 || rooms[nr][nc] === 0) {
          continue;
        }
        q.enqueue([nr, nc]);
        visit.add(`${nr}_${nc}`);
        }
      }
    dist++;
  }
    
  return rooms;
};