var validTree = function(n, edges) {
  if (n === null) return 0;
  
  const graph = buildGraph(n, edges);
  const set = new Set();

  function dfs(n, prev) {
    if (set.has(n)) {
      return false;
    }
    set.add(n);
    for (let nei of graph[n]) {
      if (nei === prev) {
        continue;
      }
      if (!(dfs(nei, n))) {
        return false;
      }
    }
    return true;

  }

  return dfs(0, -1) && set.size === n
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

