/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
  let res = [];
  let subset = [];
  let tempSet = new Set();
  
  function dfs() {
    if (nums.length === subset.length) {
      res.push([...subset]);
    }
    for (let i = 0; i < nums.length; i++) {
      if (tempSet.has(nums[i])) {
        continue;
      }
      tempSet.add(nums[i]);
      subset.push(nums[i]);
      dfs();
      tempSet.delete(nums[i]);
      subset.pop();
    }
  }
  
  dfs();
  return res;
    
};