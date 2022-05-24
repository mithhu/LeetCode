/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
  let ROWS = rooms.length;
  let COLS = rooms[0].length;
  let visit = new Set();
  
  let q = new Queue();
  
  function addRoom(r, c) {
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS ||  visit.has(`${r}*${c}`) || rooms[r][c] === -1
       ) {
      return;
    }
    visit.add(`${r}*${c}`);
    q.enqueue([r, c]);
  }
  
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (rooms[i][j] === 0) {
        q.enqueue([i, j]);
         visit.add(`${i}*${j}`);
      }
    }
  }
  
  let dist = 0;
  
  while (q.size() > 0) {
    let len = q.size();

    for (let i = 0; i < len; i++) {   
      [r, c] = q.dequeue();

      rooms[r][c] = dist;
      addRoom(r + 1, c);
      addRoom(r - 1, c);
      addRoom(r, c + 1);
      addRoom(r, c - 1);
    }
    dist += 1;
  }
    
};