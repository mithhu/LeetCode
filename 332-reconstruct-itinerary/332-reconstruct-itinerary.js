/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  tickets.sort();
  let adj = {};
  let res = ["JFK"];
  
  for (let [u, v] of tickets) {
    if (!(u in adj)) {
      adj[u] = [];
    }
    adj[u].push(v);
  }
  
  function dfs(cur) {
    if (res.length === tickets.length + 1) {
      return true;
    }
    if (!(cur in adj)) {
      return false;
    }
    
    let temp = [...adj[cur]];
    
    for (let v of temp) {
      adj[cur].shift();
      res.push(v);
      
      if (dfs(v)) {
        return true;
      }
      adj[cur].push(v);
      res.pop();
    }
    
    return false;
  }
  
  dfs("JFK");
  return res;
    
};