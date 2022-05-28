/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
  //cretae adj list
  let N = points.length;
//   let adj = {};
  
//   for (let i = 0; i < N; i++) {
//     adj[i] = [];
//   }
  
//   for (let i = 0; i < N; i++) {
//     let [xi, yi] = points[i];
//     for (let j = i + 1; j < N; j++) {
//       let [xj, yj] = points[j];
//       let dist = Math.abs(xi - xj) + Math.abs(yi - yj);
//       adj[i].push([dist, j]);
//       adj[j].push([dist, i]);
//     }
//   }
  
  //minHeap + queue
  let res = 0;
  let visited = new Set();
  let minH = new MinPriorityQueue({priority: (elem) => elem[0]});
  minH.enqueue([0, 0]);
  
  while ( visited.size < N) {
    let [cost, currNode] = minH.dequeue().element;
    if (visited.has(currNode)) {
      continue;
    }
    visited.add(currNode);
    res += cost;
    for (let nextNode = 0; nextNode < N; nextNode++) {
      if (!(visited.has(nextNode))) {
        let nextCost = getWeight(points[currNode], points[nextNode]);
        minH.enqueue([nextCost, nextNode]);
      }
    }
  }
  return res; 
};

function getWeight([xi, yi], [xj, yj]) {
    return Math.abs(xi - xj) + Math.abs(yi - yj); 
}