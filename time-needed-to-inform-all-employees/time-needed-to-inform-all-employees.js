/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */

const numOfMinutes = function(n, headID, managers, informTime) {
  const adjList = managers.map(() => []);
  
  for(let employee = 0; employee < n; employee++) {
    const manager = managers[employee];
    if(manager === -1) continue;
    
    adjList[manager].push(employee);
  }
  
  return dfs(headID, adjList, informTime);
};

const dfs = function(currentId, adjList, informTime) {
  if(adjList[currentId].length === 0) {
    return 0;
  }
  
  let max = 0;
  const subordinates = adjList[currentId];
  for(let i = 0; i < subordinates.length; i++) {
    max = Math.max(max, dfs(subordinates[i], adjList, informTime));
  }
  
  return max + informTime[currentId];
}