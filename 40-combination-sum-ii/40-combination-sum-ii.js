/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let res = [];
  let cur = [];
  candidates.sort((a, b) => a - b)

  
  function dfs(i, total) {
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
    // total += candidates[i];
    dfs(i + 1, total + candidates[i]);
    //not add
    cur.pop();
    while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
      i++;
    }

    dfs(i + 1, total);
  }
  
  dfs(0, 0);
  return res;
    
};