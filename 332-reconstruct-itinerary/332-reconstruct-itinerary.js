/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  tickets.sort();
  let adj = {};
  let res = ["JFK"];
  
  for (let [u, v] of tickets) {
    if(!(u in adj)) {
      adj[u] = [];
    }
    adj[u].push(v);
  }
  
  // console.log(adj);
  
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
        return res;
      }
      res.pop();
      adj[cur].push(v);
      
    }
    return false;
  }
  
  dfs("JFK");
  return res;
    
};
