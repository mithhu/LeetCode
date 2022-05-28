/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
  let edges = {};
  for (let i = 1; i < n + 1; i++) {
    edges[i] = [];
  }
  
  for (let [u, v, w] of times) {
    edges[u].push([v, w]);
  }
  
  let minHeap = new MinPriorityQueue({priority: (elem) => elem[0]});
  minHeap.enqueue([0, k]);
  let visited = new Set();
  let res = 0;
  
  while (minHeap.size() && visited.size < n) {
    let [w1, n1] = minHeap.dequeue().element;
    if (visited.has(n1)) {
      continue;
    }
    visited.add(n1);
    res = Math.max(w1, res);
    
    for (let [n2, w2] of edges[n1]) {
      if (!(visited.has(n2))) {
        minHeap.enqueue([w1 + w2, n2])
      }
    }
  }
  return visited.size === n ? res : -1;
};

