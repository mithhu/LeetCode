/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
  let par = [];
  for (let i = 0; i < n; i++) {
    par.push(i);
  }
  
  let rank = Array(n).fill(1);
  
  let res = n;
  
  for (let [n1, n2] of edges) {
    res -= union(n1, n2, rank, par);
  }
  
  return res;
};


function find(n, par) {
  let res = n;
  while (res !== par[res]) {
    // par[res] = par[par[res]];
    res = par[res];
  }
  return res;
}

function union(n1, n2, rank, par) {
  let p1 = find(n1, par);
  let p2 = find(n2, par);
  
  if (p1 === p2) return 0;
  
  if (rank[p2] > rank[p1]) {
    par[p1] = p2;
    rank[p1] += rank[p2];
  } else {
    par[p2] = p1;
    rank[p2] += rank[p1];
  }
  
  return 1;
}