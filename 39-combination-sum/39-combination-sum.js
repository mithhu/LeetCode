/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let curr = [];
  let res = [];
  let remaining = target;
  
  function combinationSumHelper(i, total) {
    if (total === target) {
      res.push([...curr]);
      return;
    }
    
    if ( i >= candidates.length || total > target) {
      return;
    }
    
    //add current val
    curr.push(candidates[i]);
    combinationSumHelper(i, total + candidates[i]);
    
    //skip current val
    curr.pop();
    combinationSumHelper(i + 1, total);
  }
  combinationSumHelper(0, 0);
  return res;
  
    
};