var validTree = function(n, edges) {
  if (n === null) return 0;
  
  const graph = buildGraph(n, edges);
  const visit = new Set();
  

  function dfs(n, prev) {
    if (visit.has(n)) {
      return false;
    }
    visit.add(n);
    
    for (let nei of graph[n]) {
      if (prev === nei) {
        continue;
      }
      if (!(dfs(nei, n))) {
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
  for (let [n1, n2] of edges) {
    graph[n1].push(n2);
    graph[n2].push(n1);    
  }  


  return graph;
}

