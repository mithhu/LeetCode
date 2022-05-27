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
  
  function dfs(cur) {
    if (res.length === tickets.length + 1) {
      return true;
    }
    
    if (!(cur in adj)) {
      return false;
    }
    
    let temp = [...adj[cur]];
    for (let v of temp) {
      adj[cur].shift(); // if it does not work, then I move it to last. coz in next iteration I need new value in shift. If I put back to first, then the value will be the same. Now how it wokrs on push? - works coz we are looping, so all that value will work will be rmoved from shift method. And those who don't will start at the end of the array. say = [1, 2, 3, 4] -> 1, 3 does not work when 1 does not work, the value becomes - [2, 3, 4, 1], 2 works so remove it = [3, 4, 1]. 3 does not so push = [4, 1, 2]. 4 works so remove = [1, 2]. see still sorted
      
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
