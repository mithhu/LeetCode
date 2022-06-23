/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
  let N = grid.length;
  let minHeap = new MinPriorityQueue({priority: (elem) => elem[0]}); //[t, r, c]
  let visit = new Set();
  let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  minHeap.enqueue([grid[0][0], 0, 0]);
  visit.add(`0_0`);
  
  while (minHeap.size()) {
    let [t, r, c] = minHeap.dequeue().element;

    if (r === N - 1 && c === N - 1) {
      return t;
    }
    
    for (let [dr, dc] of dir) {
      let nr = dr + r;
      let nc = dc + c;
      if (nr < 0 || nr === N || nc < 0 || nc === N || visit.has(`${nr}_${nc}`)) {
        continue;
      }
      minHeap.enqueue([Math.max(grid[nr][nc], t) , nr, nc]);
      visit.add(`${nr}_${nc}`); 
    }
    
  }
  
    
};