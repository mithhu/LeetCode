/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
  let res = [];
  let subset = [];
  let tempSet = new Set();
  
  function dfs(idx) {
    if (nums.length === subset.length) {
      res.push([...subset]);
    }
    for (let i = 0; i < nums.length; i++) {
      if (tempSet.has(nums[i])) {
        continue;
      }
      tempSet.add(nums[i]);
      subset.push(nums[i]);
      dfs(i + 1);
      tempSet.delete(nums[i]);
      subset.pop();
    }
  }
  
  dfs(0);
  return res;
    
};