/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let res = [];
  let curr = [];
  candidates.sort((a, b) => a - b)
  
  function backtrack(i, total) {
    if (total === target) {
      res.push([...curr]);
      return;
    }
    
    if (i >= candidates.length || total > target) {
      return;
    }
    
    //add the current
    curr.push(candidates[i]);
    backtrack(i + 1, total + candidates[i]);
    
    //don't use
    curr.pop();
    while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
      i++;
    }
    backtrack(i + 1, total);
  }
  
  backtrack(0, 0);

  return res;
};