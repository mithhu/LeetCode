/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let curr = [];
  let res = [];
  let remaining = target;
  
  function combinationSumHelper(i) {
    if (remaining === 0) {
      res.push([...curr]);
      return;
    }
    
    if ( i >= candidates.length || remaining < 0) {
      return;
    }
    
    //add current val
    remaining -= candidates[i];
    curr.push(candidates[i]);
    combinationSumHelper(i);
    
    //skip current val
    remaining += candidates[i];
    curr.pop();
    combinationSumHelper(i + 1);
  }
  combinationSumHelper(0);
  return res;
  
    
};