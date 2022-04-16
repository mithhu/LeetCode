/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
  if (n === null) return true;
  const graph = buildGraph(edges, n);
  let visit = new Set();
  
  function dfs(i, prev) {
    if (visit.has(i)) return false;
    visit.add(i);
    
    for (let j of graph[i]) {
      if (prev === j) continue;
      if (!dfs(j, i)) return false;
    }
    return true;
  }
  
  return dfs(0, -1) && visit.size === n;
};

const buildGraph = (edges, n) => {
  const graph = {};
  
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  
  for (const edge of edges) {
    const [a, b] = edge;
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}