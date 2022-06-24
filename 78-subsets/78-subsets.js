/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let res = [];
  let subset = [];
  
  function dfs(idx) {
    res.push([...subset]);
    for (let i = idx; i < nums.length; i++) {
      subset.push(nums[i]);
      dfs(i + 1);
      subset.pop();
    }
  }
  
  dfs(0);
  return res;
    
};