/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
  if (n === null) return true;
  const graph = buildGraph(n, edges);
  
  let visit = new Set();
  
  function dfs(i, prev) {
    if (visit.has(i)) {
      return false;
    }
    
    visit.add(i);
    for (let nei of graph[i]) {
      if (prev === nei) {
        continue;
      }
      if (!dfs(nei, i)) {
        return false;
      }
    }
    return true;
  }
    
    return dfs(0, -1) && visit.size === n;
    
    
};


function buildGraph(n, edges) {
  const graph = {};
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  
  for (let edge of edges) {
    const [n1, n2] = edge;
    graph[n1].push(n2);
    graph[n2].push(n1);
  }
  
  return graph;
}

