/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let res = [];
  let cur = [];
  let total = 0;
  
  function dfs(i) {
    //base
    if (total === target) {
      res.push([...cur]);
      return;
    }
    if (i >= candidates.length || total > target) {
      return;
    }
    
    //add
    cur.push(candidates[i]);
    total += candidates[i];
    dfs(i);
    //not add
    cur.pop();
    total -= candidates[i]
    dfs(i + 1);
  }
  
  dfs(0);
  return res;
    
};