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
    edges[u].push([w, v]);
  }
  
  let res = 0;
  let visit = new Set();
  let minH = new MinPriorityQueue({priority: (elem) => elem[0]}); // [cost, n]
  minH.enqueue([0, k]);
  
  while (minH.size() && visit.size < n) {
    let [w1, n1] = minH.dequeue().element;
    if (visit.has(n1)) {
      continue;
    }
    res = w1;
    visit.add(n1);
    for (let [w2, n2] of edges[n1]) {
      if (!(visit.has(n2))) {
        minH.enqueue([w2 + w1, n2]);
      }
    }
  }
  
  console.log(visit.size, res)
  return visit.size === n ? res : -1;
    
};