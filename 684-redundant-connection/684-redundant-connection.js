/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  let par = [];
  
  for (let i = 0; i <= edges.length; i++) {
    par.push(i);
  }
  
  let rank = Array(edges.length + 1).fill(1);
  
  function find(n) {
    let p = par[n];
    while (p !== par[p]) {
      par[p] = par[par[p]];
      p = par[p];
    }
    return p;
  }
  
  function union(n1, n2) {
    let p1 = find(n1);
    let p2 = find(n2);
    
    if (p1 === p2) return false;
    
    if (rank[p1] > rank[p2]) {
      par[p2] = p1;
      rank[p1] += rank[p2]
    } else {
      par[p1] = p2;
      rank[p2] += rank[p1];
    }
    return true;
  }
  
  for (let edge of edges) {
    [n1, n2] = edge;
    if (!union(n1, n2)) {
      return [n1, n2]
    }
  }
};